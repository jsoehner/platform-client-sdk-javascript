---
title: LearningApi
---
# platformClient.LearningApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLearningAssignment**](LearningApi.html#deleteLearningAssignment) | **DELETE** /api/v2/learning/assignments/{assignmentId} | Delete a learning assignment
[**deleteLearningModule**](LearningApi.html#deleteLearningModule) | **DELETE** /api/v2/learning/modules/{moduleId} | Delete a learning module
[**getLearningAssignment**](LearningApi.html#getLearningAssignment) | **GET** /api/v2/learning/assignments/{assignmentId} | Get Learning Assignment
[**getLearningAssignments**](LearningApi.html#getLearningAssignments) | **GET** /api/v2/learning/assignments | List of Learning module Assignments
[**getLearningAssignmentsMe**](LearningApi.html#getLearningAssignmentsMe) | **GET** /api/v2/learning/assignments/me | List of Learning Assignments assigned to current user
[**getLearningModule**](LearningApi.html#getLearningModule) | **GET** /api/v2/learning/modules/{moduleId} | Get a learning module
[**getLearningModuleRule**](LearningApi.html#getLearningModuleRule) | **GET** /api/v2/learning/modules/{moduleId}/rule | Get a learning module rule
[**getLearningModuleVersion**](LearningApi.html#getLearningModuleVersion) | **GET** /api/v2/learning/modules/{moduleId}/versions/{versionId} | Get specific version of a published module
[**getLearningModules**](LearningApi.html#getLearningModules) | **GET** /api/v2/learning/modules | Get all learning modules of an organization
[**patchLearningAssignment**](LearningApi.html#patchLearningAssignment) | **PATCH** /api/v2/learning/assignments/{assignmentId} | Update Learning Assignment
[**postLearningAssignments**](LearningApi.html#postLearningAssignments) | **POST** /api/v2/learning/assignments | Create Learning Assignment
[**postLearningAssignmentsBulkadd**](LearningApi.html#postLearningAssignmentsBulkadd) | **POST** /api/v2/learning/assignments/bulkadd | Add multiple learning assignments
[**postLearningAssignmentsBulkremove**](LearningApi.html#postLearningAssignmentsBulkremove) | **POST** /api/v2/learning/assignments/bulkremove | Remove multiple Learning Assignments
[**postLearningModulePublish**](LearningApi.html#postLearningModulePublish) | **POST** /api/v2/learning/modules/{moduleId}/publish | Publish a Learning module
[**postLearningModules**](LearningApi.html#postLearningModules) | **POST** /api/v2/learning/modules | Create a new learning module
[**postLearningRulesQuery**](LearningApi.html#postLearningRulesQuery) | **POST** /api/v2/learning/rules/query | Get users for learning module rule
[**putLearningModule**](LearningApi.html#putLearningModule) | **PUT** /api/v2/learning/modules/{moduleId} | Update a learning module
[**putLearningModuleRule**](LearningApi.html#putLearningModuleRule) | **PUT** /api/v2/learning/modules/{moduleId}/rule | Update a learning module rule
{: class="table table-striped"}

<a name="deleteLearningAssignment"></a>

# void deleteLearningAssignment(assignmentId)



DELETE /api/v2/learning/assignments/{assignmentId}

Delete a learning assignment



Requires ANY permissions: 

* learning:assignment:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The Learning Assignment ID

apiInstance.deleteLearningAssignment(assignmentId)
  .then(() => {
    console.log('deleteLearningAssignment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLearningAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The Learning Assignment ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteLearningModule"></a>

# void deleteLearningModule(moduleId)



DELETE /api/v2/learning/modules/{moduleId}

Delete a learning module

This will delete a learning module if it is unpublished or it will delete a published and archived learning module

Requires ANY permissions: 

* learning:module:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module

apiInstance.deleteLearningModule(moduleId)
  .then(() => {
    console.log('deleteLearningModule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLearningModule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getLearningAssignment"></a>

# LearningAssignment getLearningAssignment(assignmentId, opts)



GET /api/v2/learning/assignments/{assignmentId}

Get Learning Assignment

Permission not required if you are the assigned user of the learning assignment

Requires ANY permissions: 

* learning:assignment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in response
};

apiInstance.getLearningAssignment(assignmentId, opts)
  .then((data) => {
    console.log(`getLearningAssignment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **expand** | **[String]** | Fields to expand in response | [optional] <br />**Values**: module, assessment, assessmentForm |
{: class="table table-striped"}

### Return type

**LearningAssignment**

<a name="getLearningAssignments"></a>

# LearningAssignmentsDomainEntity getLearningAssignments(opts)



GET /api/v2/learning/assignments

List of Learning module Assignments

Either moduleId or user value is required

Requires ANY permissions: 

* learning:assignment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module. Fetch assignments for learning module ID
  'interval': "interval_example", // String | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if only the non-overdue (overdue is \"False\") or overdue (overdue is \"True\") assignments are returned. If overdue is \"Any\" or if the overdue parameter is not supplied, all assignments are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "Desc", // String | Specifies result set sort order; if not specified, default sort order is descending (Desc)
  'sortBy': "sortBy_example", // String | Specifies which field to sort the results by, default sort is by recommendedCompletionDate
  'userId': ["userId_example"], // [String] | Specifies the list of user IDs to be queried, up to 100 user IDs.
  'types': ["types_example"], // [String] | Specifies the assignment types, currently not supported and will be ignored. For now, all learning assignments regardless of types will be returned
  'states': ["states_example"], // [String] | Specifies the assignment states to filter by
  'expand': ["expand_example"] // [String] | Specifies the expand option for returning additional information
};

apiInstance.getLearningAssignments(opts)
  .then((data) => {
    console.log(`getLearningAssignments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Specifies the ID of the learning module. Fetch assignments for learning module ID | [optional]  |
 **interval** | **String** | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if only the non-overdue (overdue is \&quot;False\&quot;) or overdue (overdue is \&quot;True\&quot;) assignments are returned. If overdue is \&quot;Any\&quot; or if the overdue parameter is not supplied, all assignments are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Specifies result set sort order; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **sortBy** | **String** | Specifies which field to sort the results by, default sort is by recommendedCompletionDate | [optional] <br />**Values**: RecommendedCompletionDate, DateModified |
 **userId** | **[String]** | Specifies the list of user IDs to be queried, up to 100 user IDs. | [optional]  |
 **types** | **[String]** | Specifies the assignment types, currently not supported and will be ignored. For now, all learning assignments regardless of types will be returned | [optional] <br />**Values**: Informational, AssessedContent, Questionnaire |
 **states** | **[String]** | Specifies the assignment states to filter by | [optional] <br />**Values**: Assigned, InProgress, Completed |
 **expand** | **[String]** | Specifies the expand option for returning additional information | [optional] <br />**Values**: ModuleSummary |
{: class="table table-striped"}

### Return type

**LearningAssignmentsDomainEntity**

<a name="getLearningAssignmentsMe"></a>

# LearningAssignmentsDomainEntity getLearningAssignmentsMe(opts)



GET /api/v2/learning/assignments/me

List of Learning Assignments assigned to current user



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module. Fetch assignments for learning module ID
  'interval': "interval_example", // String | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if only the non-overdue (overdue is \"False\") or overdue (overdue is \"True\") assignments are returned. If overdue is \"Any\" or if the overdue parameter is not supplied, all assignments are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "Desc", // String | Specifies result set sort order; if not specified, default sort order is descending (Desc)
  'sortBy': "sortBy_example", // String | Specifies which field to sort the results by, default sort is by recommendedCompletionDate
  'types': ["types_example"], // [String] | Specifies the assignment types, currently not supported and will be ignored. For now, all learning assignments regardless of types will be returned
  'states': ["states_example"], // [String] | Specifies the assignment states to filter by
  'expand': ["expand_example"] // [String] | Specifies the expand option for returning additional information
};

apiInstance.getLearningAssignmentsMe(opts)
  .then((data) => {
    console.log(`getLearningAssignmentsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignmentsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Specifies the ID of the learning module. Fetch assignments for learning module ID | [optional]  |
 **interval** | **String** | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if only the non-overdue (overdue is \&quot;False\&quot;) or overdue (overdue is \&quot;True\&quot;) assignments are returned. If overdue is \&quot;Any\&quot; or if the overdue parameter is not supplied, all assignments are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Specifies result set sort order; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **sortBy** | **String** | Specifies which field to sort the results by, default sort is by recommendedCompletionDate | [optional] <br />**Values**: RecommendedCompletionDate, DateModified |
 **types** | **[String]** | Specifies the assignment types, currently not supported and will be ignored. For now, all learning assignments regardless of types will be returned | [optional] <br />**Values**: Informational, AssessedContent, Questionnaire |
 **states** | **[String]** | Specifies the assignment states to filter by | [optional] <br />**Values**: Assigned, InProgress, Completed |
 **expand** | **[String]** | Specifies the expand option for returning additional information | [optional] <br />**Values**: ModuleSummary |
{: class="table table-striped"}

### Return type

**LearningAssignmentsDomainEntity**

<a name="getLearningModule"></a>

# LearningModule getLearningModule(moduleId, opts)



GET /api/v2/learning/modules/{moduleId}

Get a learning module



Requires ANY permissions: 

* learning:module:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in response(case insensitive)
};

apiInstance.getLearningModule(moduleId, opts)
  .then((data) => {
    console.log(`getLearningModule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: assessmentForm |
{: class="table table-striped"}

### Return type

**LearningModule**

<a name="getLearningModuleRule"></a>

# LearningModuleRule getLearningModuleRule(moduleId)



GET /api/v2/learning/modules/{moduleId}/rule

Get a learning module rule



Requires ANY permissions: 

* learning:rule:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module

apiInstance.getLearningModuleRule(moduleId)
  .then((data) => {
    console.log(`getLearningModuleRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModuleRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
{: class="table table-striped"}

### Return type

**LearningModuleRule**

<a name="getLearningModuleVersion"></a>

# LearningModule getLearningModuleVersion(moduleId, versionId, opts)



GET /api/v2/learning/modules/{moduleId}/versions/{versionId}

Get specific version of a published module



Requires ANY permissions: 

* learning:module:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let versionId = "versionId_example"; // String | The version of learning module
let opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in response(case insensitive)
};

apiInstance.getLearningModuleVersion(moduleId, versionId, opts)
  .then((data) => {
    console.log(`getLearningModuleVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModuleVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **versionId** | **String** | The version of learning module |  |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: assessmentForm |
{: class="table table-striped"}

### Return type

**LearningModule**

<a name="getLearningModules"></a>

# LearningModulesDomainEntityListing getLearningModules(opts)



GET /api/v2/learning/modules

Get all learning modules of an organization



Requires ANY permissions: 

* learning:module:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'isArchived': false, // Boolean | Archive status
  'types': ["types_example"], // [String] | Specifies the module types.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending", // String | Sort order
  'sortBy': "name", // String | Sort by
  'searchTerm': "searchTerm_example", // String | Search Term (searchable by name)
  'expand': ["expand_example"] // [String] | Fields to expand in response(case insensitive)
};

apiInstance.getLearningModules(opts)
  .then((data) => {
    console.log(`getLearningModules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **isArchived** | **Boolean** | Archive status | [optional] [default to false] |
 **types** | **[String]** | Specifies the module types. | [optional] <br />**Values**: Informational, AssessedContent, Questionnaire |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name |
 **searchTerm** | **String** | Search Term (searchable by name) | [optional]  |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: rule, summaryData |
{: class="table table-striped"}

### Return type

**LearningModulesDomainEntityListing**

<a name="patchLearningAssignment"></a>

# LearningAssignment patchLearningAssignment(assignmentId, opts)



PATCH /api/v2/learning/assignments/{assignmentId}

Update Learning Assignment



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyLearningAssignmentUpdateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningAssignmentUpdateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningAssignmentUpdate <a href="#" onclick="return copyLearningAssignmentUpdateExample()">Copy</a>

<div id="LearningAssignmentUpdateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "state": String, 
  "assessment": { 
    "assessmentId": String, 
    "contextId": String, 
    "assessmentFormId": String, 
    "status": String, 
    "answers": { 
      "totalScore": Number, 
      "totalCriticalScore": Number, 
      "totalNonCriticalScore": Number, 
      "questionGroupScores": { 
        "questionGroupId": String, 
        "totalScore": Number, 
        "maxTotalScore": Number, 
        "markedNA": Boolean, 
        "totalCriticalScore": Number, 
        "maxTotalCriticalScore": Number, 
        "totalNonCriticalScore": Number, 
        "maxTotalNonCriticalScore": Number, 
        "totalScoreUnweighted": Number, 
        "maxTotalScoreUnweighted": Number, 
        "totalCriticalScoreUnweighted": Number, 
        "maxTotalCriticalScoreUnweighted": Number, 
        "totalNonCriticalScoreUnweighted": Number, 
        "maxTotalNonCriticalScoreUnweighted": Number, 
        "questionScores": { 
          "failedKillQuestion": Boolean, 
          "comments": String, 
          "questionId": String, 
          "answerId": String, 
          "score": Number, 
          "markedNA": Boolean, 
          "freeTextAnswer": String, 
        },  
      },  
      "failureReasons": [String], 
      "comments": String, 
      "agentComments": String, 
      "isPassed": Boolean, 
    },  
    "dateCreated": Date, 
    "dateModified": Date, 
    "dateSubmitted": Date, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let opts = { 
  'body': {} // Object | The Learning Assignment to be updated
};

apiInstance.patchLearningAssignment(assignmentId, opts)
  .then((data) => {
    console.log(`patchLearningAssignment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLearningAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **body** | **Object** | The Learning Assignment to be updated | [optional]  |
{: class="table table-striped"}

### Return type

**LearningAssignment**

<a name="postLearningAssignments"></a>

# LearningAssignment postLearningAssignments(opts)



POST /api/v2/learning/assignments

Create Learning Assignment



Requires ANY permissions: 

* learning:assignment:add


### Request Body Schema

<script type="text/javascript">
	function copyLearningAssignmentCreateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningAssignmentCreateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningAssignmentCreate <a href="#" onclick="return copyLearningAssignmentCreateExample()">Copy</a>

<div id="LearningAssignmentCreateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "moduleId": String, 
  "userId": String, 
  "recommendedCompletionDate": Date, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': {} // Object | The Learning Assignment to be created
};

apiInstance.postLearningAssignments(opts)
  .then((data) => {
    console.log(`postLearningAssignments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Learning Assignment to be created | [optional]  |
{: class="table table-striped"}

### Return type

**LearningAssignment**

<a name="postLearningAssignmentsBulkadd"></a>

# LearningAssignmentBulkAddResponse postLearningAssignmentsBulkadd(opts)



POST /api/v2/learning/assignments/bulkadd

Add multiple learning assignments



Requires ANY permissions: 

* learning:assignment:add


### Request Body Schema

<script type="text/javascript">
	function copyLearningAssignmentItemExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningAssignmentItemExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningAssignmentItem <a href="#" onclick="return copyLearningAssignmentItemExample()">Copy</a>

<div id="LearningAssignmentItemExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "moduleId": String, 
  "userId": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': [{}] // Object | The learning assignments to be created
};

apiInstance.postLearningAssignmentsBulkadd(opts)
  .then((data) => {
    console.log(`postLearningAssignmentsBulkadd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentsBulkadd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The learning assignments to be created | [optional]  |
{: class="table table-striped"}

### Return type

**LearningAssignmentBulkAddResponse**

<a name="postLearningAssignmentsBulkremove"></a>

# void postLearningAssignmentsBulkremove(opts)



POST /api/v2/learning/assignments/bulkremove

Remove multiple Learning Assignments



Requires ANY permissions: 

* learning:assignment:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': [{}] // Object | The IDs of the learning assignments to be removed
};

apiInstance.postLearningAssignmentsBulkremove(opts)
  .then(() => {
    console.log('postLearningAssignmentsBulkremove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentsBulkremove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The IDs of the learning assignments to be removed | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postLearningModulePublish"></a>

# LearningModulePublishResponse postLearningModulePublish(moduleId)



POST /api/v2/learning/modules/{moduleId}/publish

Publish a Learning module



Requires ANY permissions: 

* learning:module:publish



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module

apiInstance.postLearningModulePublish(moduleId)
  .then((data) => {
    console.log(`postLearningModulePublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningModulePublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
{: class="table table-striped"}

### Return type

**LearningModulePublishResponse**

<a name="postLearningModules"></a>

# LearningModule postLearningModules(body)



POST /api/v2/learning/modules

Create a new learning module

This will create a new unpublished learning module with the specified fields.

Requires ANY permissions: 

* learning:module:add


### Request Body Schema

<script type="text/javascript">
	function copyLearningModuleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningModuleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningModuleRequest <a href="#" onclick="return copyLearningModuleRequestExample()">Copy</a>

<div id="LearningModuleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "description": String, 
  "completionTimeInDays": Number, 
  "informSteps": { 
    "type": String, 
    "name": String, 
    "value": String, 
    "sharingUri": String, 
    "contentType": String, 
    "order": Number, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let body = {}; // Object | The learning module to be created

apiInstance.postLearningModules(body)
  .then((data) => {
    console.log(`postLearningModules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningModules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The learning module to be created |  |
{: class="table table-striped"}

### Return type

**LearningModule**

<a name="postLearningRulesQuery"></a>

# LearningAssignmentUserListing postLearningRulesQuery(pageSize, pageNumber, body)



POST /api/v2/learning/rules/query

Get users for learning module rule

This will get the users who matches the given rule.

Requires ANY permissions: 

* learning:rule:view


### Request Body Schema

<script type="text/javascript">
	function copyLearningAssignmentUserQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningAssignmentUserQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningAssignmentUserQuery <a href="#" onclick="return copyLearningAssignmentUserQueryExample()">Copy</a>

<div id="LearningAssignmentUserQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "rule": { 
    "id": String, 
    "isActive": Boolean, 
    "parts": { 
      "operation": String, 
      "selector": String, 
      "value": [String], 
      "order": Number, 
    },  
    "selfUri": String, 
  },  
  "searchTerm": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let pageSize = 50; // Number | Page size
let pageNumber = 1; // Number | Page number
let body = {}; // Object | The learning module rule to fetch users

apiInstance.postLearningRulesQuery(pageSize, pageNumber, body)
  .then((data) => {
    console.log(`postLearningRulesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningRulesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [default to 50] |
 **pageNumber** | **Number** | Page number | [default to 1] |
 **body** | **Object** | The learning module rule to fetch users |  |
{: class="table table-striped"}

### Return type

**LearningAssignmentUserListing**

<a name="putLearningModule"></a>

# LearningModule putLearningModule(moduleId, body)



PUT /api/v2/learning/modules/{moduleId}

Update a learning module

This will update the name, description, completion time in days and inform steps for a learning module

Requires ANY permissions: 

* learning:module:edit


### Request Body Schema

<script type="text/javascript">
	function copyLearningModuleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningModuleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningModuleRequest <a href="#" onclick="return copyLearningModuleRequestExample()">Copy</a>

<div id="LearningModuleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "description": String, 
  "completionTimeInDays": Number, 
  "informSteps": { 
    "type": String, 
    "name": String, 
    "value": String, 
    "sharingUri": String, 
    "contentType": String, 
    "order": Number, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let body = {}; // Object | The learning module to be updated

apiInstance.putLearningModule(moduleId, body)
  .then((data) => {
    console.log(`putLearningModule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putLearningModule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The learning module to be updated |  |
{: class="table table-striped"}

### Return type

**LearningModule**

<a name="putLearningModuleRule"></a>

# LearningModuleRule putLearningModuleRule(moduleId, body)



PUT /api/v2/learning/modules/{moduleId}/rule

Update a learning module rule

This will update a learning module rule with the specified fields.

Requires ANY permissions: 

* learning:rule:edit


### Request Body Schema

<script type="text/javascript">
	function copyLearningModuleRuleExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LearningModuleRuleExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LearningModuleRule <a href="#" onclick="return copyLearningModuleRuleExample()">Copy</a>

<div id="LearningModuleRuleExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "isActive": Boolean, 
  "parts": { 
    "operation": String, 
    "selector": String, 
    "value": [String], 
    "order": Number, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let body = {}; // Object | The learning module rule to be updated

apiInstance.putLearningModuleRule(moduleId, body)
  .then((data) => {
    console.log(`putLearningModuleRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putLearningModuleRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The learning module rule to be updated |  |
{: class="table table-striped"}

### Return type

**LearningModuleRule**
