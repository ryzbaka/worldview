import React from 'react';
import ReactDOM from 'react-dom';
import Tour from '../components/tour/tour';
import util from '../util/util';
import googleTagManager from 'googleTagManager';

export function tourUi(models, ui, config) {
  var self = {};
  self.resetting = false;
  self.events = util.events();

  var init = function() {
    if (!config.features.tour || !config.stories || !config.storyOrder) {
      return;
    }

    self.reactComponent = ReactDOM.render(
      React.createElement(Tour, getInitialProps()),
      document.getElementById('wv-tour')
    );

    models.wv.events.on('startup', function() {
      let story = models.tour.selected;
      let storyLoaded = false;
      if (story && storyLoaded === false) {
        self.selectTour(null, story, 1, story.id);
        storyLoaded = true;
      } else if (typeof story === 'undefined') {
        ui.alert.noTourAvailable();
      }
    });
  };

  var getInitialProps = function() {
    return {
      models: models,
      config: config,
      ui: ui,
      stories: config['stories'],
      storyOrder: config['storyOrder'],
      modalStart: self.checkBuildTimestamp(),
      modalInProgress: false,
      modalComplete: false,
      currentStep: 1,
      totalSteps: 10,
      tourParameter: config.parameters.tr || null,
      currentStoryIndex: 0,
      currentStory: {},
      currentStoryId: '',
      startTour: self.startTour,
      resetTour: self.resetTour,
      restartTour: false,
      metaLoaded: false,
      selectTour: self.selectTour,
      showTourAlert: ui.alert.showTourAlert,
      hideTour: self.hideTour,
      showTour: self.showTour,
      storageCheck: self.storageChecked()
    };
  };

  self.storageChecked = function() {
    if (!util.browser.localStorage) {
      return false;
    } else {
      // Do the opposite of the results of checking the build timestamp / setting modalStart
      // i.e. Checking hide means (true) not showing the start modal
      if (self.checkBuildTimestamp() === true) {
        return false;
      } else {
        return true;
      }
    }
  };

  self.checkBuildTimestamp = function() {
    // If there is no localStorage, always show the tour start modal
    if (!util.browser.localStorage) return true;
    var hideTour = localStorage.getItem('hideTour');

    // Don't start tour if coming in via a permalink
    if (window.location.search && !config.parameters.tour) {
      return false;
    }

    if (hideTour && config.buildDate) {
      let buildDate = new Date(config.buildDate);
      let tourDate = new Date(hideTour);

      // Tour hidden when visiting fresh URL
      googleTagManager.pushEvent({
        'event': 'tour_start_hidden',
        'buildDate': buildDate,
        'tourDate': tourDate
      });

      if (config.buildDate > hideTour) {
        localStorage.removeItem('hideTour');
        return true;
      } else {
        return false;
      }
    } else if (hideTour) {
      return false;
    } else {
      // Tour shown when visiting fresh URL
      googleTagManager.pushEvent({
        'event': 'tour_start'
      });
      return true;
    }
  };

  self.resetTour = function(e) {
    if (e) e.preventDefault();
    // Tour startup modal shown by clicking "More Stories" button at end of story
    googleTagManager.pushEvent({
      'event': 'tour_more_stories_button'
    });
    self.startTour();
  };

  self.startTour = function(e) {
    if (e) e.preventDefault();
    // Tour shown by manually clicking "Start Tour" button
    googleTagManager.pushEvent({
      'event': 'tour_start_button'
    });
    self.reactComponent.setState({
      modalStart: true,
      modalInProgress: false,
      modalComplete: false,
      restartTour: true
    });
  };

  self.selectTour = function(e, currentStory, currentStoryIndex, currentStoryId) {
    let totalSteps = currentStory.steps;
    if (e) e.preventDefault();
    self.reactComponent.setState({
      models: models,
      config: config,
      ui: ui,
      currentStep: 1,
      totalSteps: totalSteps.length,
      currentStoryIndex: currentStoryIndex,
      modalStart: false,
      modalInProgress: true,
      metaLoaded: false,
      modalComplete: false,
      currentStory: currentStory,
      currentStoryId: currentStoryId
    });
  };

  self.hideTour = function(e) {
    if (!util.browser.localStorage) return;
    var hideTour = localStorage.getItem('hideTour');

    // Checkbox to "hide tour modal until a new story has been added" has been checked
    googleTagManager.pushEvent({
      'event': 'tour_hide_checked'
    });

    if (hideTour) return;
    let date = new Date();
    let dateUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
      date.getUTCDate(), date.getUTCHours(),
      date.getUTCMinutes(), date.getUTCSeconds());

    localStorage.setItem('hideTour', dateUTC);
  };

  self.showTour = function(e) {
    if (!util.browser.localStorage) return;
    var hideTour = localStorage.getItem('hideTour');

    // Checkbox to "hide tour modal until a new story has been added" has been checked
    googleTagManager.pushEvent({
      'event': 'tour_hide_unchecked'
    });

    if (!hideTour) return;

    localStorage.removeItem('hideTour');
  };

  init();
  return self;
}
