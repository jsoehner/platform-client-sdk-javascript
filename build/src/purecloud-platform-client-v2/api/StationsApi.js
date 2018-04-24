(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.StationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Stations service.
   * @module purecloud-platform-client-v2/api/StationsApi
   * @version 24.0.0
   */

  /**
   * Constructs a new StationsApi. 
   * @alias module:purecloud-platform-client-v2/api/StationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Unassigns the user assigned to this station
     * 
     * @param {String} stationId Station ID
     */
    this.deleteStationAssociateduser = function(stationId) { 

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling deleteStationAssociateduser";
      }


      return this.apiClient.callApi(
        '/api/v2/stations/{stationId}/associateduser', 
        'DELETE', 
        { 'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get station.
     * 
     * @param {String} stationId Station ID
     */
    this.getStation = function(stationId) { 

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling getStation";
      }


      return this.apiClient.callApi(
        '/api/v2/stations/{stationId}', 
        'GET', 
        { 'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available stations.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.name Name
     * @param {String} opts.userSelectable True for stations that the user can select otherwise false
     * @param {String} opts.webRtcUserId Filter for the webRtc station of the webRtcUserId
     * @param {String} opts.id Comma separated list of stationIds
     * @param {String} opts.lineAppearanceId lineAppearanceId
     */
    this.getStations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/stations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'name': opts['name'],'userSelectable': opts['userSelectable'],'webRtcUserId': opts['webRtcUserId'],'id': opts['id'],'lineAppearanceId': opts['lineAppearanceId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an organization&#39;s StationSettings
     * 
     */
    this.getStationsSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/stations/settings', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch an organization&#39;s StationSettings
     * 
     * @param {Object} body Station settings
     */
    this.patchStationsSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchStationsSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/stations/settings', 
        'PATCH', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
