define([
  './viewModels/dashboard_1',
  './viewModels/incidents_1',
  './viewModels/customers_1',
  './viewModels/about_1'
  ], function(dashboard, incidents, customers, about){
    return [
      {
        path:'/',
        component: dashboard
      },
      {
        path:'/incidents',
        component: incidents
      },
      {
        path:'/customers',
        component: customers
      },
      {
        path:'/about',
        component: about
      }
    ];
  });