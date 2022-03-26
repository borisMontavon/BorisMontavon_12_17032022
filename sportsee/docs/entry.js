
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/render/components/graphs/activityGraph.js';
reactComponents['ActivityGraph'] = Component0;

import Component1 from '../src/render/components/graphs/averageSessionsGraph.js';
reactComponents['AverageSessionsGraph'] = Component1;