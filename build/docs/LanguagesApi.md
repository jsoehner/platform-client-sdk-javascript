---
title: LanguagesApi
---
# platformClient.LanguagesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLanguage**](LanguagesApi.html#deleteLanguage) | **DELETE** /api/v2/languages/{languageId} | Delete Language (Deprecated)
[**deleteRoutingLanguage**](LanguagesApi.html#deleteRoutingLanguage) | **DELETE** /api/v2/routing/languages/{languageId} | Delete Language
[**getLanguage**](LanguagesApi.html#getLanguage) | **GET** /api/v2/languages/{languageId} | Get language (Deprecated)
[**getLanguages**](LanguagesApi.html#getLanguages) | **GET** /api/v2/languages | Get the list of supported languages. (Deprecated)
[**getLanguagesTranslations**](LanguagesApi.html#getLanguagesTranslations) | **GET** /api/v2/languages/translations | Get all available languages for translation
[**getLanguagesTranslationsBuiltin**](LanguagesApi.html#getLanguagesTranslationsBuiltin) | **GET** /api/v2/languages/translations/builtin | Get the builtin translation for a language
[**getLanguagesTranslationsOrganization**](LanguagesApi.html#getLanguagesTranslationsOrganization) | **GET** /api/v2/languages/translations/organization | Get effective translation for an organization by language
[**getLanguagesTranslationsUser**](LanguagesApi.html#getLanguagesTranslationsUser) | **GET** /api/v2/languages/translations/users/{userId} | Get effective language translation for a user
[**getRoutingLanguage**](LanguagesApi.html#getRoutingLanguage) | **GET** /api/v2/routing/languages/{languageId} | Get language
[**postLanguages**](LanguagesApi.html#postLanguages) | **POST** /api/v2/languages | Create Language (Deprecated)
{: class="table table-striped"}

<a name="deleteLanguage"></a>

# null deleteLanguage(languageId)

DELETE /api/v2/languages/{languageId}

Delete Language (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages/{languageId}

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var languageId = "languageId_example"; // String | Language ID

apiInstance.deleteLanguage(languageId)
  .then(function() {
    console.log('deleteLanguage returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteLanguage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String**| Language ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingLanguage"></a>

# null deleteRoutingLanguage(languageId)

DELETE /api/v2/routing/languages/{languageId}

Delete Language



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var languageId = "languageId_example"; // String | Language ID

apiInstance.deleteRoutingLanguage(languageId)
  .then(function() {
    console.log('deleteRoutingLanguage returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingLanguage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String**| Language ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getLanguage"></a>

# [**Language**](Language.html) getLanguage(languageId)

GET /api/v2/languages/{languageId}

Get language (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages/{languageId}

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var languageId = "languageId_example"; // String | Language ID

apiInstance.getLanguage(languageId)
  .then(function(data) {
    console.log(`getLanguage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLanguage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String**| Language ID |  |
{: class="table table-striped"}

### Return type

[**Language**](Language.html)

<a name="getLanguages"></a>

# [**LanguageEntityListing**](LanguageEntityListing.html) getLanguages(opts)

GET /api/v2/languages

Get the list of supported languages. (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'name': "name_example" // String | Name
};
apiInstance.getLanguages(opts)
  .then(function(data) {
    console.log(`getLanguages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLanguages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortOrder** | **String**| Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String**| Name | [optional]  |
{: class="table table-striped"}

### Return type

[**LanguageEntityListing**](LanguageEntityListing.html)

<a name="getLanguagesTranslations"></a>

# [**AvailableTranslations**](AvailableTranslations.html) getLanguagesTranslations()

GET /api/v2/languages/translations

Get all available languages for translation



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();
apiInstance.getLanguagesTranslations()
  .then(function(data) {
    console.log(`getLanguagesTranslations success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLanguagesTranslations');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**AvailableTranslations**](AvailableTranslations.html)

<a name="getLanguagesTranslationsBuiltin"></a>

# **{&#39;String&#39;: Object}** getLanguagesTranslationsBuiltin(language)

GET /api/v2/languages/translations/builtin

Get the builtin translation for a language



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var language = "language_example"; // String | The language of the builtin translation to retrieve

apiInstance.getLanguagesTranslationsBuiltin(language)
  .then(function(data) {
    console.log(`getLanguagesTranslationsBuiltin success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLanguagesTranslationsBuiltin');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String**| The language of the builtin translation to retrieve |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getLanguagesTranslationsOrganization"></a>

# **{&#39;String&#39;: Object}** getLanguagesTranslationsOrganization(language)

GET /api/v2/languages/translations/organization

Get effective translation for an organization by language



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var language = "language_example"; // String | The language of the translation to retrieve for the organization

apiInstance.getLanguagesTranslationsOrganization(language)
  .then(function(data) {
    console.log(`getLanguagesTranslationsOrganization success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLanguagesTranslationsOrganization');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String**| The language of the translation to retrieve for the organization |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getLanguagesTranslationsUser"></a>

# **{&#39;String&#39;: Object}** getLanguagesTranslationsUser(userId)

GET /api/v2/languages/translations/users/{userId}

Get effective language translation for a user



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var userId = "userId_example"; // String | The user id

apiInstance.getLanguagesTranslationsUser(userId)
  .then(function(data) {
    console.log(`getLanguagesTranslationsUser success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLanguagesTranslationsUser');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| The user id |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getRoutingLanguage"></a>

# [**Language**](Language.html) getRoutingLanguage(languageId)

GET /api/v2/routing/languages/{languageId}

Get language



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var languageId = "languageId_example"; // String | Language ID

apiInstance.getRoutingLanguage(languageId)
  .then(function(data) {
    console.log(`getRoutingLanguage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingLanguage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String**| Language ID |  |
{: class="table table-striped"}

### Return type

[**Language**](Language.html)

<a name="postLanguages"></a>

# [**Language**](Language.html) postLanguages(body)

POST /api/v2/languages

Create Language (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LanguagesApi();

var body = new platformClient.Language(); // Language | Language

apiInstance.postLanguages(body)
  .then(function(data) {
    console.log(`postLanguages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postLanguages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Language**](Language.html)| Language |  |
{: class="table table-striped"}

### Return type

[**Language**](Language.html)
