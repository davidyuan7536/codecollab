(function () {
  'use strict';

  angular
    .module('projects')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Projects',
      state: 'projects',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'projects', {
      title: 'View Projects',
      state: 'projects.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'projects', {
      title: 'Create Project',
      state: 'projects.create',
      roles: ['user']
    });
  }
}());
