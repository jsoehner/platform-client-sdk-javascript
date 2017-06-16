---
title: VoicemailApi
---
# platformClient.VoicemailApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteVoicemailMessage**](VoicemailApi.html#deleteVoicemailMessage) | **DELETE** /api/v2/voicemail/messages/{messageId} | Delete a message.
[**deleteVoicemailMessages**](VoicemailApi.html#deleteVoicemailMessages) | **DELETE** /api/v2/voicemail/messages | Delete all voicemail messages
[**getVoicemailGroupMailbox**](VoicemailApi.html#getVoicemailGroupMailbox) | **GET** /api/v2/voicemail/groups/{groupId}/mailbox | Get the group&#39;s mailbox information
[**getVoicemailGroupMessages**](VoicemailApi.html#getVoicemailGroupMessages) | **GET** /api/v2/voicemail/groups/{groupId}/messages | List voicemail messages
[**getVoicemailGroupPolicy**](VoicemailApi.html#getVoicemailGroupPolicy) | **GET** /api/v2/voicemail/groups/{groupId}/policy | Get a group&#39;s voicemail policy
[**getVoicemailMailbox**](VoicemailApi.html#getVoicemailMailbox) | **GET** /api/v2/voicemail/mailbox | Get the current user&#39;s mailbox information
[**getVoicemailMeMailbox**](VoicemailApi.html#getVoicemailMeMailbox) | **GET** /api/v2/voicemail/me/mailbox | Get the current user&#39;s mailbox information
[**getVoicemailMeMessages**](VoicemailApi.html#getVoicemailMeMessages) | **GET** /api/v2/voicemail/me/messages | List voicemail messages
[**getVoicemailMePolicy**](VoicemailApi.html#getVoicemailMePolicy) | **GET** /api/v2/voicemail/me/policy | Get the current user&#39;s voicemail policy
[**getVoicemailMessage**](VoicemailApi.html#getVoicemailMessage) | **GET** /api/v2/voicemail/messages/{messageId} | Get message.
[**getVoicemailMessageMedia**](VoicemailApi.html#getVoicemailMessageMedia) | **GET** /api/v2/voicemail/messages/{messageId}/media | Get media playback URI for this message
[**getVoicemailMessages**](VoicemailApi.html#getVoicemailMessages) | **GET** /api/v2/voicemail/messages | List voicemail messages
[**getVoicemailPolicy**](VoicemailApi.html#getVoicemailPolicy) | **GET** /api/v2/voicemail/policy | Get a policy
[**getVoicemailSearch**](VoicemailApi.html#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**getVoicemailUserpolicy**](VoicemailApi.html#getVoicemailUserpolicy) | **GET** /api/v2/voicemail/userpolicies/{userId} | Get a user&#39;s voicemail policy
[**patchVoicemailGroupPolicy**](VoicemailApi.html#patchVoicemailGroupPolicy) | **PATCH** /api/v2/voicemail/groups/{groupId}/policy | Update a group&#39;s voicemail policy
[**patchVoicemailMePolicy**](VoicemailApi.html#patchVoicemailMePolicy) | **PATCH** /api/v2/voicemail/me/policy | Update the current user&#39;s voicemail policy
[**patchVoicemailUserpolicy**](VoicemailApi.html#patchVoicemailUserpolicy) | **PATCH** /api/v2/voicemail/userpolicies/{userId} | Update a user&#39;s voicemail policy
[**postVoicemailMessages**](VoicemailApi.html#postVoicemailMessages) | **POST** /api/v2/voicemail/messages | Copy a voicemail message to a user or group
[**postVoicemailSearch**](VoicemailApi.html#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails
[**putVoicemailMessage**](VoicemailApi.html#putVoicemailMessage) | **PUT** /api/v2/voicemail/messages/{messageId} | Update a message.
[**putVoicemailPolicy**](VoicemailApi.html#putVoicemailPolicy) | **PUT** /api/v2/voicemail/policy | Update a policy
{: class="table table-striped"}

<a name="deleteVoicemailMessage"></a>

# null deleteVoicemailMessage(messageId)

DELETE /api/v2/voicemail/messages/{messageId}

Delete a message.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

apiInstance.deleteVoicemailMessage(messageId)
  .then(function() {
    console.log('deleteVoicemailMessage returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteVoicemailMessage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String**| Message ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteVoicemailMessages"></a>

# null deleteVoicemailMessages()

DELETE /api/v2/voicemail/messages

Delete all voicemail messages



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.deleteVoicemailMessages()
  .then(function() {
    console.log('deleteVoicemailMessages returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteVoicemailMessages');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getVoicemailGroupMailbox"></a>

# [**VoicemailMailboxInfo**](VoicemailMailboxInfo.html) getVoicemailGroupMailbox(groupId)

GET /api/v2/voicemail/groups/{groupId}/mailbox

Get the group&#39;s mailbox information



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | groupId

apiInstance.getVoicemailGroupMailbox(groupId)
  .then(function(data) {
    console.log(`getVoicemailGroupMailbox success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailGroupMailbox');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String**| groupId |  |
{: class="table table-striped"}

### Return type

[**VoicemailMailboxInfo**](VoicemailMailboxInfo.html)

<a name="getVoicemailGroupMessages"></a>

# [**VoicemailMessageEntityListing**](VoicemailMessageEntityListing.html) getVoicemailGroupMessages(groupId, opts)

GET /api/v2/voicemail/groups/{groupId}/messages

List voicemail messages



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | Group ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getVoicemailGroupMessages(groupId, opts)
  .then(function(data) {
    console.log(`getVoicemailGroupMessages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailGroupMessages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String**| Group ID |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

[**VoicemailMessageEntityListing**](VoicemailMessageEntityListing.html)

<a name="getVoicemailGroupPolicy"></a>

# [**VoicemailGroupPolicy**](VoicemailGroupPolicy.html) getVoicemailGroupPolicy(groupId)

GET /api/v2/voicemail/groups/{groupId}/policy

Get a group&#39;s voicemail policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | Group ID

apiInstance.getVoicemailGroupPolicy(groupId)
  .then(function(data) {
    console.log(`getVoicemailGroupPolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailGroupPolicy');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String**| Group ID |  |
{: class="table table-striped"}

### Return type

[**VoicemailGroupPolicy**](VoicemailGroupPolicy.html)

<a name="getVoicemailMailbox"></a>

# [**VoicemailMailboxInfo**](VoicemailMailboxInfo.html) getVoicemailMailbox()

GET /api/v2/voicemail/mailbox

Get the current user&#39;s mailbox information



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailMailbox()
  .then(function(data) {
    console.log(`getVoicemailMailbox success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMailbox');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**VoicemailMailboxInfo**](VoicemailMailboxInfo.html)

<a name="getVoicemailMeMailbox"></a>

# [**VoicemailMailboxInfo**](VoicemailMailboxInfo.html) getVoicemailMeMailbox()

GET /api/v2/voicemail/me/mailbox

Get the current user&#39;s mailbox information



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailMeMailbox()
  .then(function(data) {
    console.log(`getVoicemailMeMailbox success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMeMailbox');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**VoicemailMailboxInfo**](VoicemailMailboxInfo.html)

<a name="getVoicemailMeMessages"></a>

# [**VoicemailMessageEntityListing**](VoicemailMessageEntityListing.html) getVoicemailMeMessages(opts)

GET /api/v2/voicemail/me/messages

List voicemail messages



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getVoicemailMeMessages(opts)
  .then(function(data) {
    console.log(`getVoicemailMeMessages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMeMessages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

[**VoicemailMessageEntityListing**](VoicemailMessageEntityListing.html)

<a name="getVoicemailMePolicy"></a>

# [**VoicemailUserPolicy**](VoicemailUserPolicy.html) getVoicemailMePolicy()

GET /api/v2/voicemail/me/policy

Get the current user&#39;s voicemail policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailMePolicy()
  .then(function(data) {
    console.log(`getVoicemailMePolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMePolicy');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**VoicemailUserPolicy**](VoicemailUserPolicy.html)

<a name="getVoicemailMessage"></a>

# [**VoicemailMessage**](VoicemailMessage.html) getVoicemailMessage(messageId, opts)

GET /api/v2/voicemail/messages/{messageId}

Get message.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var opts = { 
  'expand': ["expand_example"] // [String] | If the caller is a known user, which fields, if any, to expand
};
apiInstance.getVoicemailMessage(messageId, opts)
  .then(function(data) {
    console.log(`getVoicemailMessage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMessage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String**| Message ID |  |
 **expand** | [**[String]**](String.html)| If the caller is a known user, which fields, if any, to expand | [optional] <br />**Values**: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
{: class="table table-striped"}

### Return type

[**VoicemailMessage**](VoicemailMessage.html)

<a name="getVoicemailMessageMedia"></a>

# [**VoicemailMediaInfo**](VoicemailMediaInfo.html) getVoicemailMessageMedia(messageId, opts)

GET /api/v2/voicemail/messages/{messageId}/media

Get media playback URI for this message



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var opts = { 
  'formatId': "WEBM" // String | The desired media format.
};
apiInstance.getVoicemailMessageMedia(messageId, opts)
  .then(function(data) {
    console.log(`getVoicemailMessageMedia success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMessageMedia');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String**| Message ID |  |
 **formatId** | **String**| The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, NONE |
{: class="table table-striped"}

### Return type

[**VoicemailMediaInfo**](VoicemailMediaInfo.html)

<a name="getVoicemailMessages"></a>

# [**VoicemailMessageEntityListing**](VoicemailMessageEntityListing.html) getVoicemailMessages(opts)

GET /api/v2/voicemail/messages

List voicemail messages



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var opts = { 
  'ids': "ids_example", // String | An optional comma separated list of VoicemailMessage ids
  'expand': ["expand_example"] // [String] | If the caller is a known user, which fields, if any, to expand
};
apiInstance.getVoicemailMessages(opts)
  .then(function(data) {
    console.log(`getVoicemailMessages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailMessages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String**| An optional comma separated list of VoicemailMessage ids | [optional]  |
 **expand** | [**[String]**](String.html)| If the caller is a known user, which fields, if any, to expand | [optional] <br />**Values**: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
{: class="table table-striped"}

### Return type

[**VoicemailMessageEntityListing**](VoicemailMessageEntityListing.html)

<a name="getVoicemailPolicy"></a>

# [**VoicemailOrganizationPolicy**](VoicemailOrganizationPolicy.html) getVoicemailPolicy()

GET /api/v2/voicemail/policy

Get a policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailPolicy()
  .then(function(data) {
    console.log(`getVoicemailPolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailPolicy');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**VoicemailOrganizationPolicy**](VoicemailOrganizationPolicy.html)

<a name="getVoicemailSearch"></a>

# [**VoicemailsSearchResponse**](VoicemailsSearchResponse.html) getVoicemailSearch(q64, opts)

GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getVoicemailSearch(q64, opts)
  .then(function(data) {
    console.log(`getVoicemailSearch success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| expand | [optional]  |
{: class="table table-striped"}

### Return type

[**VoicemailsSearchResponse**](VoicemailsSearchResponse.html)

<a name="getVoicemailUserpolicy"></a>

# [**VoicemailUserPolicy**](VoicemailUserPolicy.html) getVoicemailUserpolicy(userId)

GET /api/v2/voicemail/userpolicies/{userId}

Get a user&#39;s voicemail policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var userId = "userId_example"; // String | User ID

apiInstance.getVoicemailUserpolicy(userId)
  .then(function(data) {
    console.log(`getVoicemailUserpolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailUserpolicy');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
{: class="table table-striped"}

### Return type

[**VoicemailUserPolicy**](VoicemailUserPolicy.html)

<a name="patchVoicemailGroupPolicy"></a>

# [**VoicemailGroupPolicy**](VoicemailGroupPolicy.html) patchVoicemailGroupPolicy(groupId, body)

PATCH /api/v2/voicemail/groups/{groupId}/policy

Update a group&#39;s voicemail policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | Group ID

var body = new platformClient.VoicemailGroupPolicy(); // VoicemailGroupPolicy | The group's voicemail policy

apiInstance.patchVoicemailGroupPolicy(groupId, body)
  .then(function(data) {
    console.log(`patchVoicemailGroupPolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchVoicemailGroupPolicy');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String**| Group ID |  |
 **body** | [**VoicemailGroupPolicy**](VoicemailGroupPolicy.html)| The group&#39;s voicemail policy |  |
{: class="table table-striped"}

### Return type

[**VoicemailGroupPolicy**](VoicemailGroupPolicy.html)

<a name="patchVoicemailMePolicy"></a>

# [**VoicemailUserPolicy**](VoicemailUserPolicy.html) patchVoicemailMePolicy(body)

PATCH /api/v2/voicemail/me/policy

Update the current user&#39;s voicemail policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var body = new platformClient.VoicemailUserPolicy(); // VoicemailUserPolicy | The user's voicemail policy

apiInstance.patchVoicemailMePolicy(body)
  .then(function(data) {
    console.log(`patchVoicemailMePolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchVoicemailMePolicy');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**VoicemailUserPolicy**](VoicemailUserPolicy.html)| The user&#39;s voicemail policy |  |
{: class="table table-striped"}

### Return type

[**VoicemailUserPolicy**](VoicemailUserPolicy.html)

<a name="patchVoicemailUserpolicy"></a>

# [**VoicemailUserPolicy**](VoicemailUserPolicy.html) patchVoicemailUserpolicy(userId, body)

PATCH /api/v2/voicemail/userpolicies/{userId}

Update a user&#39;s voicemail policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var userId = "userId_example"; // String | User ID

var body = new platformClient.VoicemailUserPolicy(); // VoicemailUserPolicy | The user's voicemail policy

apiInstance.patchVoicemailUserpolicy(userId, body)
  .then(function(data) {
    console.log(`patchVoicemailUserpolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchVoicemailUserpolicy');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
 **body** | [**VoicemailUserPolicy**](VoicemailUserPolicy.html)| The user&#39;s voicemail policy |  |
{: class="table table-striped"}

### Return type

[**VoicemailUserPolicy**](VoicemailUserPolicy.html)

<a name="postVoicemailMessages"></a>

# [**VoicemailMessage**](VoicemailMessage.html) postVoicemailMessages(opts)

POST /api/v2/voicemail/messages

Copy a voicemail message to a user or group



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var opts = { 
  'body': new platformClient.CopyVoicemailMessage() // CopyVoicemailMessage | 
};
apiInstance.postVoicemailMessages(opts)
  .then(function(data) {
    console.log(`postVoicemailMessages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postVoicemailMessages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CopyVoicemailMessage**](CopyVoicemailMessage.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**VoicemailMessage**](VoicemailMessage.html)

<a name="postVoicemailSearch"></a>

# [**VoicemailsSearchResponse**](VoicemailsSearchResponse.html) postVoicemailSearch(body)

POST /api/v2/voicemail/search

Search voicemails



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var body = new platformClient.VoicemailSearchRequest(); // VoicemailSearchRequest | Search request options

apiInstance.postVoicemailSearch(body)
  .then(function(data) {
    console.log(`postVoicemailSearch success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postVoicemailSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**VoicemailSearchRequest**](VoicemailSearchRequest.html)| Search request options |  |
{: class="table table-striped"}

### Return type

[**VoicemailsSearchResponse**](VoicemailsSearchResponse.html)

<a name="putVoicemailMessage"></a>

# [**VoicemailMessage**](VoicemailMessage.html) putVoicemailMessage(messageId, body)

PUT /api/v2/voicemail/messages/{messageId}

Update a message.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var body = new platformClient.VoicemailMessage(); // VoicemailMessage | VoicemailMessage

apiInstance.putVoicemailMessage(messageId, body)
  .then(function(data) {
    console.log(`putVoicemailMessage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putVoicemailMessage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String**| Message ID |  |
 **body** | [**VoicemailMessage**](VoicemailMessage.html)| VoicemailMessage |  |
{: class="table table-striped"}

### Return type

[**VoicemailMessage**](VoicemailMessage.html)

<a name="putVoicemailPolicy"></a>

# [**VoicemailOrganizationPolicy**](VoicemailOrganizationPolicy.html) putVoicemailPolicy(body)

PUT /api/v2/voicemail/policy

Update a policy



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var body = new platformClient.VoicemailOrganizationPolicy(); // VoicemailOrganizationPolicy | Policy

apiInstance.putVoicemailPolicy(body)
  .then(function(data) {
    console.log(`putVoicemailPolicy success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putVoicemailPolicy');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**VoicemailOrganizationPolicy**](VoicemailOrganizationPolicy.html)| Policy |  |
{: class="table table-striped"}

### Return type

[**VoicemailOrganizationPolicy**](VoicemailOrganizationPolicy.html)
