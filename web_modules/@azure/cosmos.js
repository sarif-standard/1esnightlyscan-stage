import { p as process } from '../common/process-2545f00a.js';
import { c as createCommonjsModule } from '../common/_commonjsHelpers-4f955397.js';

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const DEFAULT_PARTITION_KEY_PATH = "/_partitionKey"; // eslint-disable-line @typescript-eslint/prefer-as-const

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * @hidden
 */
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const Constants = {
    HttpHeaders: {
        Authorization: "authorization",
        ETag: "etag",
        MethodOverride: "X-HTTP-Method",
        Slug: "Slug",
        ContentType: "Content-Type",
        LastModified: "Last-Modified",
        ContentEncoding: "Content-Encoding",
        CharacterSet: "CharacterSet",
        UserAgent: "User-Agent",
        IfModifiedSince: "If-Modified-Since",
        IfMatch: "If-Match",
        IfNoneMatch: "If-None-Match",
        ContentLength: "Content-Length",
        AcceptEncoding: "Accept-Encoding",
        KeepAlive: "Keep-Alive",
        CacheControl: "Cache-Control",
        TransferEncoding: "Transfer-Encoding",
        ContentLanguage: "Content-Language",
        ContentLocation: "Content-Location",
        ContentMd5: "Content-Md5",
        ContentRange: "Content-Range",
        Accept: "Accept",
        AcceptCharset: "Accept-Charset",
        AcceptLanguage: "Accept-Language",
        IfRange: "If-Range",
        IfUnmodifiedSince: "If-Unmodified-Since",
        MaxForwards: "Max-Forwards",
        ProxyAuthorization: "Proxy-Authorization",
        AcceptRanges: "Accept-Ranges",
        ProxyAuthenticate: "Proxy-Authenticate",
        RetryAfter: "Retry-After",
        SetCookie: "Set-Cookie",
        WwwAuthenticate: "Www-Authenticate",
        Origin: "Origin",
        Host: "Host",
        AccessControlAllowOrigin: "Access-Control-Allow-Origin",
        AccessControlAllowHeaders: "Access-Control-Allow-Headers",
        KeyValueEncodingFormat: "application/x-www-form-urlencoded",
        WrapAssertionFormat: "wrap_assertion_format",
        WrapAssertion: "wrap_assertion",
        WrapScope: "wrap_scope",
        SimpleToken: "SWT",
        HttpDate: "date",
        Prefer: "Prefer",
        Location: "Location",
        Referer: "referer",
        A_IM: "A-IM",
        // Query
        Query: "x-ms-documentdb-query",
        IsQuery: "x-ms-documentdb-isquery",
        IsQueryPlan: "x-ms-cosmos-is-query-plan-request",
        SupportedQueryFeatures: "x-ms-cosmos-supported-query-features",
        QueryVersion: "x-ms-cosmos-query-version",
        // Our custom Azure Cosmos DB headers
        Continuation: "x-ms-continuation",
        PageSize: "x-ms-max-item-count",
        ItemCount: "x-ms-item-count",
        // Request sender generated. Simply echoed by backend.
        ActivityId: "x-ms-activity-id",
        PreTriggerInclude: "x-ms-documentdb-pre-trigger-include",
        PreTriggerExclude: "x-ms-documentdb-pre-trigger-exclude",
        PostTriggerInclude: "x-ms-documentdb-post-trigger-include",
        PostTriggerExclude: "x-ms-documentdb-post-trigger-exclude",
        IndexingDirective: "x-ms-indexing-directive",
        SessionToken: "x-ms-session-token",
        ConsistencyLevel: "x-ms-consistency-level",
        XDate: "x-ms-date",
        CollectionPartitionInfo: "x-ms-collection-partition-info",
        CollectionServiceInfo: "x-ms-collection-service-info",
        // Deprecated, use RetryAfterInMs instead.
        RetryAfterInMilliseconds: "x-ms-retry-after-ms",
        RetryAfterInMs: "x-ms-retry-after-ms",
        IsFeedUnfiltered: "x-ms-is-feed-unfiltered",
        ResourceTokenExpiry: "x-ms-documentdb-expiry-seconds",
        EnableScanInQuery: "x-ms-documentdb-query-enable-scan",
        EmitVerboseTracesInQuery: "x-ms-documentdb-query-emit-traces",
        EnableCrossPartitionQuery: "x-ms-documentdb-query-enablecrosspartition",
        ParallelizeCrossPartitionQuery: "x-ms-documentdb-query-parallelizecrosspartitionquery",
        ResponseContinuationTokenLimitInKB: "x-ms-documentdb-responsecontinuationtokenlimitinkb",
        // QueryMetrics
        // Request header to tell backend to give you query metrics.
        PopulateQueryMetrics: "x-ms-documentdb-populatequerymetrics",
        // Response header that holds the serialized version of query metrics.
        QueryMetrics: "x-ms-documentdb-query-metrics",
        // Version headers and values
        Version: "x-ms-version",
        // Owner name
        OwnerFullName: "x-ms-alt-content-path",
        // Owner ID used for name based request in session token.
        OwnerId: "x-ms-content-path",
        // Partition Key
        PartitionKey: "x-ms-documentdb-partitionkey",
        PartitionKeyRangeID: "x-ms-documentdb-partitionkeyrangeid",
        // Quota Info
        MaxEntityCount: "x-ms-root-entity-max-count",
        CurrentEntityCount: "x-ms-root-entity-current-count",
        CollectionQuotaInMb: "x-ms-collection-quota-mb",
        CollectionCurrentUsageInMb: "x-ms-collection-usage-mb",
        MaxMediaStorageUsageInMB: "x-ms-max-media-storage-usage-mb",
        CurrentMediaStorageUsageInMB: "x-ms-media-storage-usage-mb",
        RequestCharge: "x-ms-request-charge",
        PopulateQuotaInfo: "x-ms-documentdb-populatequotainfo",
        MaxResourceQuota: "x-ms-resource-quota",
        // Offer header
        OfferType: "x-ms-offer-type",
        OfferThroughput: "x-ms-offer-throughput",
        AutoscaleSettings: "x-ms-cosmos-offer-autopilot-settings",
        // Custom RUs/minute headers
        DisableRUPerMinuteUsage: "x-ms-documentdb-disable-ru-per-minute-usage",
        IsRUPerMinuteUsed: "x-ms-documentdb-is-ru-per-minute-used",
        OfferIsRUPerMinuteThroughputEnabled: "x-ms-offer-is-ru-per-minute-throughput-enabled",
        // Index progress headers
        IndexTransformationProgress: "x-ms-documentdb-collection-index-transformation-progress",
        LazyIndexingProgress: "x-ms-documentdb-collection-lazy-indexing-progress",
        // Upsert header
        IsUpsert: "x-ms-documentdb-is-upsert",
        // Sub status of the error
        SubStatus: "x-ms-substatus",
        // StoredProcedure related headers
        EnableScriptLogging: "x-ms-documentdb-script-enable-logging",
        ScriptLogResults: "x-ms-documentdb-script-log-results",
        // Multi-Region Write
        ALLOW_MULTIPLE_WRITES: "x-ms-cosmos-allow-tentative-writes",
        // Bulk/Batch header
        IsBatchRequest: "x-ms-cosmos-is-batch-request",
        IsBatchAtomic: "x-ms-cosmos-batch-atomic",
        BatchContinueOnError: "x-ms-cosmos-batch-continue-on-error",
        // Cache Refresh header
        ForceRefresh: "x-ms-force-refresh"
    },
    // GlobalDB related constants
    WritableLocations: "writableLocations",
    ReadableLocations: "readableLocations",
    // ServiceDocument Resource
    ENABLE_MULTIPLE_WRITABLE_LOCATIONS: "enableMultipleWriteLocations",
    // Background refresh time
    DefaultUnavailableLocationExpirationTimeMS: 5 * 60 * 1000,
    // Client generated retry count response header
    ThrottleRetryCount: "x-ms-throttle-retry-count",
    ThrottleRetryWaitTimeInMs: "x-ms-throttle-retry-wait-time-ms",
    CurrentVersion: "2018-12-31",
    SDKName: "azure-cosmos-js",
    SDKVersion: "3.10.5",
    Quota: {
        CollectionSize: "collectionSize"
    },
    Path: {
        DatabasesPathSegment: "dbs",
        CollectionsPathSegment: "colls",
        UsersPathSegment: "users",
        DocumentsPathSegment: "docs",
        PermissionsPathSegment: "permissions",
        StoredProceduresPathSegment: "sprocs",
        TriggersPathSegment: "triggers",
        UserDefinedFunctionsPathSegment: "udfs",
        ConflictsPathSegment: "conflicts",
        AttachmentsPathSegment: "attachments",
        PartitionKeyRangesPathSegment: "pkranges",
        SchemasPathSegment: "schemas",
        OffersPathSegment: "offers",
        TopologyPathSegment: "topology",
        DatabaseAccountPathSegment: "databaseaccount"
    },
    PartitionKeyRange: {
        // Partition Key Range Constants
        MinInclusive: "minInclusive",
        MaxExclusive: "maxExclusive",
        Id: "id"
    },
    QueryRangeConstants: {
        // Partition Key Range Constants
        MinInclusive: "minInclusive",
        MaxExclusive: "maxExclusive",
        min: "min"
    },
    EffectiveParitionKeyConstants: {
        MinimumInclusiveEffectivePartitionKey: "",
        MaximumExclusiveEffectivePartitionKey: "FF"
    }
};
/**
 * @hidden
 */
var ResourceType;
(function (ResourceType) {
    ResourceType["none"] = "";
    ResourceType["database"] = "dbs";
    ResourceType["offer"] = "offers";
    ResourceType["user"] = "users";
    ResourceType["permission"] = "permissions";
    ResourceType["container"] = "colls";
    ResourceType["conflicts"] = "conflicts";
    ResourceType["sproc"] = "sprocs";
    ResourceType["udf"] = "udfs";
    ResourceType["trigger"] = "triggers";
    ResourceType["item"] = "docs";
    ResourceType["pkranges"] = "pkranges";
})(ResourceType || (ResourceType = {}));
/**
 * @hidden
 */
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["get"] = "GET";
    HTTPMethod["post"] = "POST";
    HTTPMethod["put"] = "PUT";
    HTTPMethod["delete"] = "DELETE";
})(HTTPMethod || (HTTPMethod = {}));
/**
 * @hidden
 */
var OperationType;
(function (OperationType) {
    OperationType["Create"] = "create";
    OperationType["Replace"] = "replace";
    OperationType["Upsert"] = "upsert";
    OperationType["Delete"] = "delete";
    OperationType["Read"] = "read";
    OperationType["Query"] = "query";
    OperationType["Execute"] = "execute";
    OperationType["Batch"] = "batch";
})(OperationType || (OperationType = {}));

const trimLeftSlashes = new RegExp("^[/]+");
const trimRightSlashes = new RegExp("[/]+$");
const illegalResourceIdCharacters = new RegExp("[/\\\\?#]");
/** @hidden */
function jsonStringifyAndEscapeNonASCII(arg) {
    // TODO: better way for this? Not sure.
    // escapes non-ASCII characters as \uXXXX
    return JSON.stringify(arg).replace(/[\u007F-\uFFFF]/g, (m) => {
        return "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4);
    });
}
/**
 * @hidden
 */
function parseLink(resourcePath) {
    if (resourcePath.length === 0) {
        /* for DatabaseAccount case, both type and objectBody will be undefined. */
        return {
            type: undefined,
            objectBody: undefined
        };
    }
    if (resourcePath[resourcePath.length - 1] !== "/") {
        resourcePath = resourcePath + "/";
    }
    if (resourcePath[0] !== "/") {
        resourcePath = "/" + resourcePath;
    }
    /*
           The path will be in the form of /[resourceType]/[resourceId]/ ....
           /[resourceType]//[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId]/
           or /[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId]/[resourceType]/[resourceId]/ ....
            /[resourceType]/[resourceId]/
           The result of split will be in the form of
           [[[resourceType], [resourceId] ... ,[resourceType], [resourceId], ""]
           In the first case, to extract the resourceId it will the element before last ( at length -2 )
           and the type will be before it ( at length -3 )
           In the second case, to extract the resource type it will the element before last ( at length -2 )
          */
    const pathParts = resourcePath.split("/");
    let id;
    let type;
    if (pathParts.length % 2 === 0) {
        // request in form /[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId].
        id = pathParts[pathParts.length - 2];
        type = pathParts[pathParts.length - 3];
    }
    else {
        // request in form /[resourceType]/[resourceId]/ .... /[resourceType]/.
        id = pathParts[pathParts.length - 3];
        type = pathParts[pathParts.length - 2];
    }
    const result = {
        type,
        objectBody: {
            id,
            self: resourcePath
        }
    };
    return result;
}
/**
 * @hidden
 */
function isReadRequest(operationType) {
    return operationType === OperationType.Read || operationType === OperationType.Query;
}
/**
 * @hidden
 */
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
/**
 * @hidden
 */
function getContainerLink(link) {
    return link
        .split("/")
        .slice(0, 4)
        .join("/");
}
/**
 * @hidden
 */
function trimSlashes(source) {
    return source.replace(trimLeftSlashes, "").replace(trimRightSlashes, "");
}
/**
 * @hidden
 */
function parsePath(path) {
    const pathParts = [];
    let currentIndex = 0;
    const throwError = () => {
        throw new Error("Path " + path + " is invalid at index " + currentIndex);
    };
    const getEscapedToken = () => {
        const quote = path[currentIndex];
        let newIndex = ++currentIndex;
        for (;;) {
            newIndex = path.indexOf(quote, newIndex);
            if (newIndex === -1) {
                throwError();
            }
            if (path[newIndex - 1] !== "\\") {
                break;
            }
            ++newIndex;
        }
        const token = path.substr(currentIndex, newIndex - currentIndex);
        currentIndex = newIndex + 1;
        return token;
    };
    const getToken = () => {
        const newIndex = path.indexOf("/", currentIndex);
        let token = null;
        if (newIndex === -1) {
            token = path.substr(currentIndex);
            currentIndex = path.length;
        }
        else {
            token = path.substr(currentIndex, newIndex - currentIndex);
            currentIndex = newIndex;
        }
        token = token.trim();
        return token;
    };
    while (currentIndex < path.length) {
        if (path[currentIndex] !== "/") {
            throwError();
        }
        if (++currentIndex === path.length) {
            break;
        }
        if (path[currentIndex] === '"' || path[currentIndex] === "'") {
            pathParts.push(getEscapedToken());
        }
        else {
            pathParts.push(getToken());
        }
    }
    return pathParts;
}
/**
 * @hidden
 */
function isResourceValid(resource, err) {
    // TODO: fix strictness issues so that caller contexts respects the types of the functions
    if (resource.id) {
        if (typeof resource.id !== "string") {
            err.message = "Id must be a string.";
            return false;
        }
        if (resource.id.indexOf("/") !== -1 ||
            resource.id.indexOf("\\") !== -1 ||
            resource.id.indexOf("?") !== -1 ||
            resource.id.indexOf("#") !== -1) {
            err.message = "Id contains illegal chars.";
            return false;
        }
        if (resource.id[resource.id.length - 1] === " ") {
            err.message = "Id ends with a space.";
            return false;
        }
    }
    return true;
}
/** @hidden */
function getIdFromLink(resourceLink) {
    resourceLink = trimSlashes(resourceLink);
    return resourceLink;
}
/** @hidden */
function getPathFromLink(resourceLink, resourceType) {
    resourceLink = trimSlashes(resourceLink);
    if (resourceType) {
        return "/" + encodeURI(resourceLink) + "/" + resourceType;
    }
    else {
        return "/" + encodeURI(resourceLink);
    }
}
/**
 * @hidden
 */
function isStringNullOrEmpty(inputString) {
    // checks whether string is null, undefined, empty or only contains space
    return !inputString || /^\s*$/.test(inputString);
}
/**
 * @hidden
 */
function trimSlashFromLeftAndRight(inputString) {
    if (typeof inputString !== "string") {
        throw new Error("invalid input: input is not string");
    }
    return inputString.replace(trimLeftSlashes, "").replace(trimRightSlashes, "");
}
/**
 * @hidden
 */
function validateResourceId(resourceId) {
    // if resourceId is not a string or is empty throw an error
    if (typeof resourceId !== "string" || isStringNullOrEmpty(resourceId)) {
        throw new Error("Resource Id must be a string and cannot be undefined, null or empty");
    }
    // if resourceId starts or ends with space throw an error
    if (resourceId[resourceId.length - 1] === " ") {
        throw new Error("Resource Id cannot end with space");
    }
    // if resource id contains illegal characters throw an error
    if (illegalResourceIdCharacters.test(resourceId)) {
        throw new Error("Illegal characters ['/', '\\', '?', '#'] cannot be used in resourceId");
    }
    return true;
}
/**
 * @hidden
 */
function getResourceIdFromPath(resourcePath) {
    if (!resourcePath || typeof resourcePath !== "string") {
        return null;
    }
    const trimmedPath = trimSlashFromLeftAndRight(resourcePath);
    const pathSegments = trimmedPath.split("/");
    // number of segments of a path must always be even
    if (pathSegments.length % 2 !== 0) {
        return null;
    }
    return pathSegments[pathSegments.length - 1];
}
/**
 * @hidden
 */
function parseConnectionString(connectionString) {
    const keyValueStrings = connectionString.split(";");
    const { AccountEndpoint, AccountKey } = keyValueStrings.reduce((connectionObject, keyValueString) => {
        const [key, ...value] = keyValueString.split("=");
        connectionObject[key] = value.join("=");
        return connectionObject;
    }, {});
    if (!AccountEndpoint || !AccountKey) {
        throw new Error("Could not parse the provided connection string");
    }
    return {
        endpoint: AccountEndpoint,
        key: AccountKey
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * @hidden
 */
const StatusCodes = {
    // Success
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,
    NotModified: 304,
    // Client error
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    PreconditionFailed: 412,
    RequestEntityTooLarge: 413,
    TooManyRequests: 429,
    RetryWith: 449,
    // Server Error
    InternalServerError: 500,
    ServiceUnavailable: 503,
    // Operation pause and cancel. These are FAKE status codes for QOS logging purpose only.
    OperationPaused: 1200,
    OperationCancelled: 1201
};
/**
 * @hidden
 */
const SubStatusCodes = {
    Unknown: 0,
    // 400: Bad Request Substatus
    CrossPartitionQueryNotServable: 1004,
    // 410: StatusCodeType_Gone: substatus
    PartitionKeyRangeGone: 1002,
    // 404: NotFound Substatus
    ReadSessionNotAvailable: 1002,
    // 403: Forbidden Substatus
    WriteForbidden: 3,
    DatabaseAccountNotFound: 1008
};

// Copyright (c) Microsoft Corporation.
/**
 * Would be used when creating or deleting a DocumentCollection
 * or a User in Azure Cosmos DB database service
 * @hidden
 * Given a database id, this creates a database link.
 * @param databaseId - The database id
 * @returns A database link in the format of `dbs/{0}`
 * with `{0}` being a Uri escaped version of the databaseId
 */
function createDatabaseUri(databaseId) {
    databaseId = trimSlashFromLeftAndRight(databaseId);
    validateResourceId(databaseId);
    return Constants.Path.DatabasesPathSegment + "/" + databaseId;
}
/**
 * Given a database and collection id, this creates a collection link.
 * Would be used when updating or deleting a DocumentCollection, creating a
 * Document, a StoredProcedure, a Trigger, a UserDefinedFunction, or when executing a query
 * with CreateDocumentQuery in Azure Cosmos DB database service.
 * @param databaseId - The database id
 * @param collectionId - The collection id
 * @returns A collection link in the format of `dbs/{0}/colls/{1}`
 * with `{0}` being a Uri escaped version of the databaseId and `{1}` being collectionId
 * @hidden
 */
function createDocumentCollectionUri(databaseId, collectionId) {
    collectionId = trimSlashFromLeftAndRight(collectionId);
    validateResourceId(collectionId);
    return (createDatabaseUri(databaseId) + "/" + Constants.Path.CollectionsPathSegment + "/" + collectionId);
}
/**
 * Given a database and user id, this creates a user link.
 * Would be used when creating a Permission, or when replacing or deleting
 * a User in Azure Cosmos DB database service
 * @param databaseId - The database id
 * @param userId - The user id
 * @returns A user link in the format of `dbs/{0}/users/{1}`
 * with `{0}` being a Uri escaped version of the databaseId and `{1}` being userId
 * @hidden
 */
function createUserUri(databaseId, userId) {
    userId = trimSlashFromLeftAndRight(userId);
    validateResourceId(userId);
    return createDatabaseUri(databaseId) + "/" + Constants.Path.UsersPathSegment + "/" + userId;
}
/**
 * Given a database and collection id, this creates a collection link.
 * Would be used when creating an Attachment, or when replacing
 * or deleting a Document in Azure Cosmos DB database service
 * @param databaseId - The database id
 * @param collectionId - The collection id
 * @param documentId - The document id
 * @returns A document link in the format of
 * `dbs/{0}/colls/{1}/docs/{2}` with `{0}` being a Uri escaped version of
 * the databaseId, `{1}` being collectionId and `{2}` being the documentId
 * @hidden
 */
function createDocumentUri(databaseId, collectionId, documentId) {
    documentId = trimSlashFromLeftAndRight(documentId);
    validateResourceId(documentId);
    return (createDocumentCollectionUri(databaseId, collectionId) +
        "/" +
        Constants.Path.DocumentsPathSegment +
        "/" +
        documentId);
}
/**
 * Given a database, collection and document id, this creates a document link.
 * Would be used when replacing or deleting a Permission in Azure Cosmos DB database service.
 * @param databaseId    -The database Id
 * @param userId        -The user Id
 * @param permissionId  - The permissionId
 * @returns A permission link in the format of `dbs/{0}/users/{1}/permissions/{2}`
 * with `{0}` being a Uri escaped version of the databaseId, `{1}` being userId and `{2}` being permissionId
 * @hidden
 */
function createPermissionUri(databaseId, userId, permissionId) {
    permissionId = trimSlashFromLeftAndRight(permissionId);
    validateResourceId(permissionId);
    return (createUserUri(databaseId, userId) +
        "/" +
        Constants.Path.PermissionsPathSegment +
        "/" +
        permissionId);
}
/**
 * Given a database, collection and stored proc id, this creates a stored proc link.
 * Would be used when replacing, executing, or deleting a StoredProcedure in
 * Azure Cosmos DB database service.
 * @param databaseId        -The database Id
 * @param collectionId      -The collection Id
 * @param storedProcedureId -The stored procedure Id
 * @returns A stored procedure link in the format of
 * `dbs/{0}/colls/{1}/sprocs/{2}` with `{0}` being a Uri escaped version of the databaseId,
 * `{1}` being collectionId and `{2}` being the storedProcedureId
 * @hidden
 */
function createStoredProcedureUri(databaseId, collectionId, storedProcedureId) {
    storedProcedureId = trimSlashFromLeftAndRight(storedProcedureId);
    validateResourceId(storedProcedureId);
    return (createDocumentCollectionUri(databaseId, collectionId) +
        "/" +
        Constants.Path.StoredProceduresPathSegment +
        "/" +
        storedProcedureId);
}
/**
 * Given a database, collection and trigger id, this creates a trigger link.
 * Would be used when replacing, executing, or deleting a Trigger in Azure Cosmos DB database service
 * @param databaseId        -The database Id
 * @param collectionId      -The collection Id
 * @param triggerId         -The trigger Id
 * @returns A trigger link in the format of
 * `dbs/{0}/colls/{1}/triggers/{2}` with `{0}` being a Uri escaped version of the databaseId,
 * `{1}` being collectionId and `{2}` being the triggerId
 * @hidden
 */
function createTriggerUri(databaseId, collectionId, triggerId) {
    triggerId = trimSlashFromLeftAndRight(triggerId);
    validateResourceId(triggerId);
    return (createDocumentCollectionUri(databaseId, collectionId) +
        "/" +
        Constants.Path.TriggersPathSegment +
        "/" +
        triggerId);
}
/**
 * Given a database, collection and udf id, this creates a udf link.
 * Would be used when replacing, executing, or deleting a UserDefinedFunction in
 * Azure Cosmos DB database service
 * @param databaseId        -The database Id
 * @param collectionId      -The collection Id
 * @param udfId             -The User Defined Function Id
 * @returns A udf link in the format of `dbs/{0}/colls/{1}/udfs/{2}`
 * with `{0}` being a Uri escaped version of the databaseId, `{1}` being collectionId and `{2}` being the udfId
 * @hidden
 */
function createUserDefinedFunctionUri(databaseId, collectionId, udfId) {
    udfId = trimSlashFromLeftAndRight(udfId);
    validateResourceId(udfId);
    return (createDocumentCollectionUri(databaseId, collectionId) +
        "/" +
        Constants.Path.UserDefinedFunctionsPathSegment +
        "/" +
        udfId);
}

function getUserAgent() {
    if (typeof navigator === "object" && "userAgent" in navigator) {
        return navigator.userAgent;
    }
    if (typeof process === "object" && "version" in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    }
    return "<environment undetectable>";
}

// Copyright (c) Microsoft Corporation.
/**
 * @hidden
 */
function getUserAgent$1(suffix) {
    const ua = `${getUserAgent()} ${Constants.SDKName}/${Constants.SDKVersion}`;
    if (suffix) {
        return ua + " " + suffix;
    }
    return ua;
}

// Copyright (c) Microsoft Corporation.
/**
 * @hidden
 */
function extractPartitionKey(document, partitionKeyDefinition) {
    if (partitionKeyDefinition &&
        partitionKeyDefinition.paths &&
        partitionKeyDefinition.paths.length > 0) {
        const partitionKey = [];
        partitionKeyDefinition.paths.forEach((path) => {
            const pathParts = parsePath(path);
            let obj = document;
            for (const part of pathParts) {
                if (typeof obj === "object" && part in obj) {
                    obj = obj[part];
                }
                else {
                    obj = undefined;
                    break;
                }
            }
            partitionKey.push(obj);
        });
        if (partitionKey.length === 1 && partitionKey[0] === undefined) {
            return undefinedPartitionKey(partitionKeyDefinition);
        }
        return partitionKey;
    }
}
/**
 * @hidden
 */
function undefinedPartitionKey(partitionKeyDefinition) {
    if (partitionKeyDefinition.systemKey === true) {
        return [];
    }
    else {
        return [{}];
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference lib="dom"/>
function encodeUTF8(str) {
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}
function encodeBase64(value) {
    if ("function" !== typeof btoa) {
        throw new Error("Your browser environment is missing the global `btoa` function");
    }
    let binary = "";
    const bytes = new Uint8Array(value);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
let safeatob;
// base64 character set, plus padding character (=)
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// Regular expression to check formal correctness of base64 encoded strings
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if ("function" !== typeof atob) {
    // atob implementation for React Native
    safeatob = (str) => {
        // atob can work with strings with whitespaces, even inside the encoded part,
        // but only \t, \n, \f, \r and ' ', which can be stripped.
        str = String(str).replace(/[\t\n\f\r ]+/g, "");
        if (!b64re.test(str)) {
            throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
        }
        // Adding the padding if missing, for simplicity
        str += "==".slice(2 - (str.length & 3));
        let bitmap;
        let result = "";
        let r1;
        let r2;
        let i = 0;
        for (; i < str.length;) {
            bitmap =
                (b64.indexOf(str.charAt(i++)) << 18) |
                    (b64.indexOf(str.charAt(i++)) << 12) |
                    ((r1 = b64.indexOf(str.charAt(i++))) << 6) |
                    (r2 = b64.indexOf(str.charAt(i++)));
            result +=
                r1 === 64
                    ? String.fromCharCode((bitmap >> 16) & 255)
                    : r2 === 64
                        ? String.fromCharCode((bitmap >> 16) & 255, (bitmap >> 8) & 255)
                        : String.fromCharCode((bitmap >> 16) & 255, (bitmap >> 8) & 255, bitmap & 255);
        }
        return result;
    };
}
else {
    safeatob = atob;
}
var atob$1 = safeatob;

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// eslint-disable-next-line @azure/azure-sdk/ts-no-window
const globalRef = typeof self === "undefined" ? window : self;
if (!globalRef) {
    throw new Error("Could not find global");
}
const globalCrypto = globalRef.crypto || globalRef.msCrypto;
if (!globalCrypto || !globalCrypto.subtle) {
    throw new Error("Browser does not support cryptography functions");
}

// Copyright (c) Microsoft Corporation.
function hmac(key, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const importParams = { name: "HMAC", hash: { name: "SHA-256" } };
        const encodedMessage = new Uint8Array([...unescape(encodeURIComponent(message))].map((c) => c.charCodeAt(0)));
        const encodedKey = encodeUTF8(atob$1(key));
        const cryptoKey = yield globalCrypto.subtle.importKey("raw", encodedKey, importParams, false, [
            "sign"
        ]);
        const signature = yield globalCrypto.subtle.sign(importParams, cryptoKey, encodedMessage);
        return encodeBase64(signature);
    });
}

// Copyright (c) Microsoft Corporation.
function generateHeaders(masterKey, method, resourceType = ResourceType.none, resourceId = "", date = new Date()) {
    return __awaiter(this, void 0, void 0, function* () {
        const sig = yield signature(masterKey, method, resourceType, resourceId, date);
        return {
            [Constants.HttpHeaders.Authorization]: sig,
            [Constants.HttpHeaders.XDate]: date.toUTCString()
        };
    });
}
function signature(masterKey, method, resourceType, resourceId = "", date = new Date()) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = "master";
        const version = "1.0";
        const text = method.toLowerCase() +
            "\n" +
            resourceType.toLowerCase() +
            "\n" +
            resourceId +
            "\n" +
            date.toUTCString().toLowerCase() +
            "\n" +
            "" +
            "\n";
        const signed = yield hmac(masterKey, text);
        return encodeURIComponent("type=" + type + "&ver=" + version + "&sig=" + signed);
    });
}

/**
 * @hidden
 */
function setAuthorizationHeader(clientOptions, verb, path, resourceId, resourceType, headers) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (clientOptions.permissionFeed) {
            clientOptions.resourceTokens = {};
            for (const permission of clientOptions.permissionFeed) {
                const id = getResourceIdFromPath(permission.resource);
                if (!id) {
                    throw new Error(`authorization error: ${id} \
                          is an invalid resourceId in permissionFeed`);
                }
                clientOptions.resourceTokens[id] = permission._token; // TODO: any
            }
        }
        if (clientOptions.key) {
            yield setAuthorizationTokenHeaderUsingMasterKey(verb, resourceId, resourceType, headers, clientOptions.key);
        }
        else if (clientOptions.resourceTokens) {
            headers[Constants.HttpHeaders.Authorization] = encodeURIComponent(getAuthorizationTokenUsingResourceTokens(clientOptions.resourceTokens, path, resourceId));
        }
        else if (clientOptions.tokenProvider) {
            headers[Constants.HttpHeaders.Authorization] = encodeURIComponent(yield clientOptions.tokenProvider({ verb, path, resourceId, resourceType, headers }));
        }
        else if (clientOptions.aadCredentials) {
            if (typeof ((_a = clientOptions.aadCredentials) === null || _a === void 0 ? void 0 : _a.getToken) !== "function") {
                throw new Error("Cannot use AAD Credentials without `getToken`. See @azure/identity docs");
            }
            const token = yield clientOptions.aadCredentials.getToken(`${clientOptions.endpoint}/.default`);
            const AUTH_PREFIX = `type=aad&ver=1.0&sig=`;
            const authorizationToken = `${AUTH_PREFIX}${token.token}`;
            headers[Constants.HttpHeaders.Authorization] = encodeURIComponent(authorizationToken);
        }
    });
}
/**
 * The default function for setting header token using the masterKey
 * @hidden
 */
function setAuthorizationTokenHeaderUsingMasterKey(verb, resourceId, resourceType, headers, masterKey) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO This should live in cosmos-sign
        if (resourceType === ResourceType.offer) {
            resourceId = resourceId && resourceId.toLowerCase();
        }
        headers = Object.assign(headers, yield generateHeaders(masterKey, verb, resourceType, resourceId));
    });
}
/**
 * @hidden
 */
// TODO: Resource tokens
function getAuthorizationTokenUsingResourceTokens(resourceTokens, path, resourceId) {
    if (resourceTokens && Object.keys(resourceTokens).length > 0) {
        // For database account access(through getDatabaseAccount API), path and resourceId are "",
        // so in this case we return the first token to be used for creating the auth header as the
        // service will accept any token in this case
        if (!path && !resourceId) {
            return resourceTokens[Object.keys(resourceTokens)[0]];
        }
        // If we have exact resource token for the path use it
        if (resourceId && resourceTokens[resourceId]) {
            return resourceTokens[resourceId];
        }
        // minimum valid path /dbs
        if (!path || path.length < 4) {
            // TODO: This should throw an error
            return null;
        }
        path = trimSlashFromLeftAndRight(path);
        const pathSegments = (path && path.split("/")) || [];
        // Item path
        if (pathSegments.length === 6) {
            // Look for a container token matching the item path
            const containerPath = pathSegments
                .slice(0, 4)
                .map(decodeURIComponent)
                .join("/");
            if (resourceTokens[containerPath]) {
                return resourceTokens[containerPath];
            }
        }
        // TODO remove in v4: This is legacy behavior that lets someone use a resource token pointing ONLY at an ID
        // It was used when _rid was exposed by the SDK, but now that we are using user provided ids it is not needed
        // However removing it now would be a breaking change
        // if it's an incomplete path like /dbs/db1/colls/, start from the parent resource
        let index = pathSegments.length % 2 === 0 ? pathSegments.length - 1 : pathSegments.length - 2;
        for (; index > 0; index -= 2) {
            const id = decodeURI(pathSegments[index]);
            if (resourceTokens[id]) {
                return resourceTokens[id];
            }
        }
    }
    // TODO: This should throw an error
    return null;
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Copyright (c) Microsoft Corporation.
function isKeyInRange(min, max, key) {
    const isAfterMinInclusive = key.localeCompare(min) >= 0;
    const isBeforeMax = key.localeCompare(max) < 0;
    return isAfterMinInclusive && isBeforeMax;
}
const BulkOperationType = {
    Create: "Create",
    Upsert: "Upsert",
    Read: "Read",
    Delete: "Delete",
    Replace: "Replace"
};
function hasResource(operation) {
    return operation.resourceBody !== undefined;
}
function getPartitionKeyToHash(operation, partitionProperty) {
    const toHashKey = hasResource(operation)
        ? operation.resourceBody[partitionProperty]
        : (operation.partitionKey && operation.partitionKey.replace(/[[\]"']/g, "")) ||
            operation.partitionKey;
    // We check for empty object since replace will stringify the value
    // The second check avoids cases where the partitionKey value is actually the string '{}'
    if (toHashKey === "{}" && operation.partitionKey === "[{}]") {
        return {};
    }
    if (toHashKey === "null" && operation.partitionKey === "[null]") {
        return null;
    }
    if (toHashKey === "0" && operation.partitionKey === "[0]") {
        return 0;
    }
    return toHashKey;
}
function decorateOperation(operation, definition, options = {}) {
    if (operation.operationType === BulkOperationType.Create ||
        operation.operationType === BulkOperationType.Upsert) {
        if ((operation.resourceBody.id === undefined || operation.resourceBody.id === "") &&
            !options.disableAutomaticIdGeneration) {
            operation.resourceBody.id = v4();
        }
    }
    if ("partitionKey" in operation) {
        const extracted = extractPartitionKey(operation, { paths: ["/partitionKey"] });
        return Object.assign(Object.assign({}, operation), { partitionKey: JSON.stringify(extracted) });
    }
    else if (operation.operationType === BulkOperationType.Create ||
        operation.operationType === BulkOperationType.Replace ||
        operation.operationType === BulkOperationType.Upsert) {
        const pk = extractPartitionKey(operation.resourceBody, definition);
        return Object.assign(Object.assign({}, operation), { partitionKey: JSON.stringify(pk) });
    }
    else if (operation.operationType === BulkOperationType.Read ||
        operation.operationType === BulkOperationType.Delete) {
        return Object.assign(Object.assign({}, operation), { partitionKey: "[{}]" });
    }
    return operation;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/** Determines the connection behavior of the CosmosClient. Note, we currently only support Gateway Mode. */
var ConnectionMode;
(function (ConnectionMode) {
    /** Gateway mode talks to a intermediate gateway which handles the direct communicationi with your individual partitions. */
    ConnectionMode[ConnectionMode["Gateway"] = 0] = "Gateway";
})(ConnectionMode || (ConnectionMode = {}));

/**
 * @hidden
 */
const defaultConnectionPolicy = Object.freeze({
    connectionMode: ConnectionMode.Gateway,
    requestTimeout: 60000,
    enableEndpointDiscovery: true,
    preferredLocations: [],
    retryOptions: {},
    useMultipleWriteLocations: true
});

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Represents the consistency levels supported for Azure Cosmos DB client operations.<br>
 * The requested ConsistencyLevel must match or be weaker than that provisioned for the database account.
 * Consistency levels.
 *
 * Consistency levels by order of strength are Strong, BoundedStaleness, Session, Consistent Prefix, and Eventual.
 *
 * See https://aka.ms/cosmos-consistency for more detailed documentation on Consistency Levels.
 */
var ConsistencyLevel;
(function (ConsistencyLevel) {
    /**
     * Strong Consistency guarantees that read operations always return the value that was last written.
     */
    ConsistencyLevel["Strong"] = "Strong";
    /**
     * Bounded Staleness guarantees that reads are not too out-of-date.
     * This can be configured based on number of operations (MaxStalenessPrefix) or time (MaxStalenessIntervalInSeconds).
     */
    ConsistencyLevel["BoundedStaleness"] = "BoundedStaleness";
    /**
     * Session Consistency guarantees monotonic reads (you never read old data, then new, then old again),
     * monotonic writes (writes are ordered) and read your writes (your writes are immediately visible to your reads)
     * within any single session.
     */
    ConsistencyLevel["Session"] = "Session";
    /**
     * Eventual Consistency guarantees that reads will return a subset of writes.
     * All writes will be eventually be available for reads.
     */
    ConsistencyLevel["Eventual"] = "Eventual";
    /**
     * ConsistentPrefix Consistency guarantees that reads will return some prefix of all writes with no gaps.
     * All writes will be eventually be available for reads.
     */
    ConsistencyLevel["ConsistentPrefix"] = "ConsistentPrefix";
})(ConsistencyLevel || (ConsistencyLevel = {}));

// Copyright (c) Microsoft Corporation.
/**
 * Represents a DatabaseAccount in the Azure Cosmos DB database service.
 */
class DatabaseAccount {
    // TODO: body - any
    constructor(body, headers) {
        /** The list of writable locations for a geo-replicated database account. */
        this.writableLocations = [];
        /** The list of readable locations for a geo-replicated database account. */
        this.readableLocations = [];
        this.databasesLink = "/dbs/";
        this.mediaLink = "/media/";
        this.maxMediaStorageUsageInMB = headers[Constants.HttpHeaders.MaxMediaStorageUsageInMB];
        this.currentMediaStorageUsageInMB = headers[Constants.HttpHeaders.CurrentMediaStorageUsageInMB];
        this.consistencyPolicy = body.UserConsistencyPolicy
            ? body.UserConsistencyPolicy.defaultConsistencyLevel
            : ConsistencyLevel.Session;
        if (body[Constants.WritableLocations] && body.id !== "localhost") {
            this.writableLocations = body[Constants.WritableLocations];
        }
        if (body[Constants.ReadableLocations] && body.id !== "localhost") {
            this.readableLocations = body[Constants.ReadableLocations];
        }
        if (body[Constants.ENABLE_MULTIPLE_WRITABLE_LOCATIONS]) {
            this.enableMultipleWritableLocations =
                body[Constants.ENABLE_MULTIPLE_WRITABLE_LOCATIONS] === true ||
                    body[Constants.ENABLE_MULTIPLE_WRITABLE_LOCATIONS] === "true";
        }
    }
    /**
     * The self-link for Databases in the databaseAccount.
     * @deprecated Use `databasesLink`
     */
    get DatabasesLink() {
        return this.databasesLink;
    }
    /**
     * The self-link for Media in the databaseAccount.
     * @deprecated Use `mediaLink`
     */
    get MediaLink() {
        return this.mediaLink;
    }
    /**
     * Attachment content (media) storage quota in MBs ( Retrieved from gateway ).
     * @deprecated use `maxMediaStorageUsageInMB`
     */
    get MaxMediaStorageUsageInMB() {
        return this.maxMediaStorageUsageInMB;
    }
    /**
     * Current attachment content (media) usage in MBs (Retrieved from gateway )
     *
     * Value is returned from cached information updated periodically and is not guaranteed
     * to be real time.
     *
     * @deprecated use `currentMediaStorageUsageInMB`
     */
    get CurrentMediaStorageUsageInMB() {
        return this.currentMediaStorageUsageInMB;
    }
    /**
     * Gets the UserConsistencyPolicy settings.
     * @deprecated use `consistencyPolicy`
     */
    get ConsistencyPolicy() {
        return this.consistencyPolicy;
    }
}

// Copyright (c) Microsoft Corporation.
class ResourceResponse {
    constructor(resource, headers, statusCode, substatus) {
        this.resource = resource;
        this.headers = headers;
        this.statusCode = statusCode;
        this.substatus = substatus;
    }
    get requestCharge() {
        return Number(this.headers[Constants.HttpHeaders.RequestCharge]) || 0;
    }
    get activityId() {
        return this.headers[Constants.HttpHeaders.ActivityId];
    }
    get etag() {
        return this.headers[Constants.HttpHeaders.ETag];
    }
}

// Copyright (c) Microsoft Corporation.
class FeedResponse {
    constructor(resources, headers, hasMoreResults) {
        this.resources = resources;
        this.headers = headers;
        this.hasMoreResults = hasMoreResults;
    }
    get continuation() {
        return this.continuationToken;
    }
    get continuationToken() {
        return this.headers[Constants.HttpHeaders.Continuation];
    }
    get queryMetrics() {
        return this.headers[Constants.HttpHeaders.QueryMetrics];
    }
    get requestCharge() {
        return this.headers[Constants.HttpHeaders.RequestCharge];
    }
    get activityId() {
        return this.headers[Constants.HttpHeaders.ActivityId];
    }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
class ClientSideMetrics {
    constructor(requestCharge) {
        this.requestCharge = requestCharge;
    }
    /**
     * Adds one or more ClientSideMetrics to a copy of this instance and returns the result.
     */
    add(...clientSideMetricsArray) {
        let requestCharge = this.requestCharge;
        for (const clientSideMetrics of clientSideMetricsArray) {
            if (clientSideMetrics == null) {
                throw new Error("clientSideMetrics has null or undefined item(s)");
            }
            requestCharge += clientSideMetrics.requestCharge;
        }
        return new ClientSideMetrics(requestCharge);
    }
    static createFromArray(...clientSideMetricsArray) {
        if (clientSideMetricsArray == null) {
            throw new Error("clientSideMetricsArray is null or undefined item(s)");
        }
        return this.zero.add(...clientSideMetricsArray);
    }
}
ClientSideMetrics.zero = new ClientSideMetrics(0);

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var QueryMetricsConstants = {
    // QueryMetrics
    RetrievedDocumentCount: "retrievedDocumentCount",
    RetrievedDocumentSize: "retrievedDocumentSize",
    OutputDocumentCount: "outputDocumentCount",
    OutputDocumentSize: "outputDocumentSize",
    IndexHitRatio: "indexUtilizationRatio",
    IndexHitDocumentCount: "indexHitDocumentCount",
    TotalQueryExecutionTimeInMs: "totalExecutionTimeInMs",
    // QueryPreparationTimes
    QueryCompileTimeInMs: "queryCompileTimeInMs",
    LogicalPlanBuildTimeInMs: "queryLogicalPlanBuildTimeInMs",
    PhysicalPlanBuildTimeInMs: "queryPhysicalPlanBuildTimeInMs",
    QueryOptimizationTimeInMs: "queryOptimizationTimeInMs",
    // QueryTimes
    IndexLookupTimeInMs: "indexLookupTimeInMs",
    DocumentLoadTimeInMs: "documentLoadTimeInMs",
    VMExecutionTimeInMs: "VMExecutionTimeInMs",
    DocumentWriteTimeInMs: "writeOutputTimeInMs",
    // RuntimeExecutionTimes
    QueryEngineTimes: "queryEngineTimes",
    SystemFunctionExecuteTimeInMs: "systemFunctionExecuteTimeInMs",
    UserDefinedFunctionExecutionTimeInMs: "userFunctionExecuteTimeInMs",
    // QueryMetrics Text
    RetrievedDocumentCountText: "Retrieved Document Count",
    RetrievedDocumentSizeText: "Retrieved Document Size",
    OutputDocumentCountText: "Output Document Count",
    OutputDocumentSizeText: "Output Document Size",
    IndexUtilizationText: "Index Utilization",
    TotalQueryExecutionTimeText: "Total Query Execution Time",
    // QueryPreparationTimes Text
    QueryPreparationTimesText: "Query Preparation Times",
    QueryCompileTimeText: "Query Compilation Time",
    LogicalPlanBuildTimeText: "Logical Plan Build Time",
    PhysicalPlanBuildTimeText: "Physical Plan Build Time",
    QueryOptimizationTimeText: "Query Optimization Time",
    // QueryTimes Text
    QueryEngineTimesText: "Query Engine Times",
    IndexLookupTimeText: "Index Lookup Time",
    DocumentLoadTimeText: "Document Load Time",
    WriteOutputTimeText: "Document Write Time",
    // RuntimeExecutionTimes Text
    RuntimeExecutionTimesText: "Runtime Execution Times",
    TotalExecutionTimeText: "Query Engine Execution Time",
    SystemFunctionExecuteTimeText: "System Function Execution Time",
    UserDefinedFunctionExecutionTimeText: "User-defined Function Execution Time",
    // ClientSideQueryMetrics Text
    ClientSideQueryMetricsText: "Client Side Metrics",
    RetriesText: "Retry Count",
    RequestChargeText: "Request Charge",
    FetchExecutionRangesText: "Partition Execution Timeline",
    SchedulingMetricsText: "Scheduling Metrics"
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Ported this implementation to javascript:
// https://referencesource.microsoft.com/#mscorlib/system/timespan.cs,83e476c1ae112117
/** @hidden */
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const ticksPerMillisecond = 10000;
/** @hidden */
const millisecondsPerTick = 1.0 / ticksPerMillisecond;
/** @hidden */
const ticksPerSecond = ticksPerMillisecond * 1000; // 10,000,000
/** @hidden */
const secondsPerTick = 1.0 / ticksPerSecond; // 0.0001
/** @hidden */
const ticksPerMinute = ticksPerSecond * 60; // 600,000,000
/** @hidden */
const minutesPerTick = 1.0 / ticksPerMinute; // 1.6666666666667e-9
/** @hidden */
const ticksPerHour = ticksPerMinute * 60; // 36,000,000,000
/** @hidden */
const hoursPerTick = 1.0 / ticksPerHour; // 2.77777777777777778e-11
/** @hidden */
const ticksPerDay = ticksPerHour * 24; // 864,000,000,000
/** @hidden */
const daysPerTick = 1.0 / ticksPerDay; // 1.1574074074074074074e-12
/** @hidden */
const millisPerSecond = 1000;
/** @hidden */
const millisPerMinute = millisPerSecond * 60; //     60,000
/** @hidden */
const millisPerHour = millisPerMinute * 60; //  3,600,000
/** @hidden */
const millisPerDay = millisPerHour * 24; // 86,400,000
/** @hidden */
const maxMilliSeconds = Number.MAX_SAFE_INTEGER / ticksPerMillisecond;
/** @hidden */
const minMilliSeconds = Number.MIN_SAFE_INTEGER / ticksPerMillisecond;
/**
 * Represents a time interval.
 *
 * @param days                 - Number of days.
 * @param hours                - Number of hours.
 * @param minutes              - Number of minutes.
 * @param seconds              - Number of seconds.
 * @param milliseconds         - Number of milliseconds.
 * @hidden
 */
class TimeSpan {
    constructor(days, hours, minutes, seconds, milliseconds) {
        // Constructor
        if (!Number.isInteger(days)) {
            throw new Error("days is not an integer");
        }
        if (!Number.isInteger(hours)) {
            throw new Error("hours is not an integer");
        }
        if (!Number.isInteger(minutes)) {
            throw new Error("minutes is not an integer");
        }
        if (!Number.isInteger(seconds)) {
            throw new Error("seconds is not an integer");
        }
        if (!Number.isInteger(milliseconds)) {
            throw new Error("milliseconds is not an integer");
        }
        const totalMilliSeconds = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
        if (totalMilliSeconds > maxMilliSeconds || totalMilliSeconds < minMilliSeconds) {
            throw new Error("Total number of milliseconds was either too large or too small");
        }
        this._ticks = totalMilliSeconds * ticksPerMillisecond;
    }
    /**
     * Returns a new TimeSpan object whose value is the sum of the specified TimeSpan object and this instance.
     * @param ts - The time interval to add.
     */
    add(ts) {
        if (TimeSpan.additionDoesOverflow(this._ticks, ts._ticks)) {
            throw new Error("Adding the two timestamps causes an overflow.");
        }
        const results = this._ticks + ts._ticks;
        return TimeSpan.fromTicks(results);
    }
    /**
     * Returns a new TimeSpan object whose value is the difference of the specified TimeSpan object and this instance.
     * @param ts - The time interval to subtract.
     */
    subtract(ts) {
        if (TimeSpan.subtractionDoesUnderflow(this._ticks, ts._ticks)) {
            throw new Error("Subtracting the two timestamps causes an underflow.");
        }
        const results = this._ticks - ts._ticks;
        return TimeSpan.fromTicks(results);
    }
    /**
     * Compares this instance to a specified object and returns an integer that indicates whether this
     * instance is shorter than, equal to, or longer than the specified object.
     * @param value - The time interval to add.
     */
    compareTo(value) {
        if (value == null) {
            return 1;
        }
        if (!TimeSpan.isTimeSpan(value)) {
            throw new Error("Argument must be a TimeSpan object");
        }
        return TimeSpan.compare(this, value);
    }
    /**
     * Returns a new TimeSpan object whose value is the absolute value of the current TimeSpan object.
     */
    duration() {
        return TimeSpan.fromTicks(this._ticks >= 0 ? this._ticks : -this._ticks);
    }
    /**
     * Returns a value indicating whether this instance is equal to a specified object.
     * @param value - The time interval to check for equality.
     */
    equals(value) {
        if (TimeSpan.isTimeSpan(value)) {
            return this._ticks === value._ticks;
        }
        return false;
    }
    /**
     * Returns a new TimeSpan object whose value is the negated value of this instance.
     * @param value - The time interval to check for equality.
     */
    negate() {
        return TimeSpan.fromTicks(-this._ticks);
    }
    days() {
        return Math.floor(this._ticks / ticksPerDay);
    }
    hours() {
        return Math.floor(this._ticks / ticksPerHour);
    }
    milliseconds() {
        return Math.floor(this._ticks / ticksPerMillisecond);
    }
    seconds() {
        return Math.floor(this._ticks / ticksPerSecond);
    }
    ticks() {
        return this._ticks;
    }
    totalDays() {
        return this._ticks * daysPerTick;
    }
    totalHours() {
        return this._ticks * hoursPerTick;
    }
    totalMilliseconds() {
        return this._ticks * millisecondsPerTick;
    }
    totalMinutes() {
        return this._ticks * minutesPerTick;
    }
    totalSeconds() {
        return this._ticks * secondsPerTick;
    }
    static fromTicks(value) {
        const timeSpan = new TimeSpan(0, 0, 0, 0, 0);
        timeSpan._ticks = value;
        return timeSpan;
    }
    static isTimeSpan(timespan) {
        return timespan._ticks;
    }
    static additionDoesOverflow(a, b) {
        const c = a + b;
        return a !== c - b || b !== c - a;
    }
    static subtractionDoesUnderflow(a, b) {
        const c = a - b;
        return a !== c + b || b !== a - c;
    }
    static compare(t1, t2) {
        if (t1._ticks > t2._ticks) {
            return 1;
        }
        if (t1._ticks < t2._ticks) {
            return -1;
        }
        return 0;
    }
    static interval(value, scale) {
        if (isNaN(value)) {
            throw new Error("value must be a number");
        }
        const milliseconds = value * scale;
        if (milliseconds > maxMilliSeconds || milliseconds < minMilliSeconds) {
            throw new Error("timespan too long");
        }
        return TimeSpan.fromTicks(Math.floor(milliseconds * ticksPerMillisecond));
    }
    static fromMilliseconds(value) {
        return TimeSpan.interval(value, 1);
    }
    static fromSeconds(value) {
        return TimeSpan.interval(value, millisPerSecond);
    }
    static fromMinutes(value) {
        return TimeSpan.interval(value, millisPerMinute);
    }
    static fromHours(value) {
        return TimeSpan.interval(value, millisPerHour);
    }
    static fromDays(value) {
        return TimeSpan.interval(value, millisPerDay);
    }
}
TimeSpan.zero = new TimeSpan(0, 0, 0, 0, 0);
TimeSpan.maxValue = TimeSpan.fromTicks(Number.MAX_SAFE_INTEGER);
TimeSpan.minValue = TimeSpan.fromTicks(Number.MIN_SAFE_INTEGER);

// Copyright (c) Microsoft Corporation.
/**
 * @hidden
 */
function parseDelimitedString(delimitedString) {
    if (delimitedString == null) {
        throw new Error("delimitedString is null or undefined");
    }
    const metrics = {};
    const headerAttributes = delimitedString.split(";");
    for (const attribute of headerAttributes) {
        const attributeKeyValue = attribute.split("=");
        if (attributeKeyValue.length !== 2) {
            throw new Error("recieved a malformed delimited string");
        }
        const attributeKey = attributeKeyValue[0];
        const attributeValue = parseFloat(attributeKeyValue[1]);
        metrics[attributeKey] = attributeValue;
    }
    return metrics;
}
/**
 * @hidden
 */
function timeSpanFromMetrics(metrics /* TODO: any */, key) {
    if (key in metrics) {
        return TimeSpan.fromMilliseconds(metrics[key]);
    }
    return TimeSpan.zero;
}

// Copyright (c) Microsoft Corporation.
class QueryPreparationTimes {
    constructor(queryCompilationTime, logicalPlanBuildTime, physicalPlanBuildTime, queryOptimizationTime) {
        this.queryCompilationTime = queryCompilationTime;
        this.logicalPlanBuildTime = logicalPlanBuildTime;
        this.physicalPlanBuildTime = physicalPlanBuildTime;
        this.queryOptimizationTime = queryOptimizationTime;
    }
    /**
     * returns a new QueryPreparationTimes instance that is the addition of this and the arguments.
     */
    add(...queryPreparationTimesArray) {
        let queryCompilationTime = this.queryCompilationTime;
        let logicalPlanBuildTime = this.logicalPlanBuildTime;
        let physicalPlanBuildTime = this.physicalPlanBuildTime;
        let queryOptimizationTime = this.queryOptimizationTime;
        for (const queryPreparationTimes of queryPreparationTimesArray) {
            if (queryPreparationTimes == null) {
                throw new Error("queryPreparationTimesArray has null or undefined item(s)");
            }
            queryCompilationTime = queryCompilationTime.add(queryPreparationTimes.queryCompilationTime);
            logicalPlanBuildTime = logicalPlanBuildTime.add(queryPreparationTimes.logicalPlanBuildTime);
            physicalPlanBuildTime = physicalPlanBuildTime.add(queryPreparationTimes.physicalPlanBuildTime);
            queryOptimizationTime = queryOptimizationTime.add(queryPreparationTimes.queryOptimizationTime);
        }
        return new QueryPreparationTimes(queryCompilationTime, logicalPlanBuildTime, physicalPlanBuildTime, queryOptimizationTime);
    }
    /**
     * Output the QueryPreparationTimes as a delimited string.
     */
    toDelimitedString() {
        return (`${QueryMetricsConstants.QueryCompileTimeInMs}=${this.queryCompilationTime.totalMilliseconds()};` +
            `${QueryMetricsConstants.LogicalPlanBuildTimeInMs}=${this.logicalPlanBuildTime.totalMilliseconds()};` +
            `${QueryMetricsConstants.PhysicalPlanBuildTimeInMs}=${this.physicalPlanBuildTime.totalMilliseconds()};` +
            `${QueryMetricsConstants.QueryOptimizationTimeInMs}=${this.queryOptimizationTime.totalMilliseconds()}`);
    }
    /**
     * Returns a new instance of the QueryPreparationTimes class that is the
     * aggregation of an array of QueryPreparationTimes.
     */
    static createFromArray(queryPreparationTimesArray) {
        if (queryPreparationTimesArray == null) {
            throw new Error("queryPreparationTimesArray is null or undefined item(s)");
        }
        return QueryPreparationTimes.zero.add(...queryPreparationTimesArray);
    }
    /**
     * Returns a new instance of the QueryPreparationTimes class this is deserialized from a delimited string.
     */
    static createFromDelimitedString(delimitedString) {
        const metrics = parseDelimitedString(delimitedString);
        return new QueryPreparationTimes(timeSpanFromMetrics(metrics, QueryMetricsConstants.QueryCompileTimeInMs), timeSpanFromMetrics(metrics, QueryMetricsConstants.LogicalPlanBuildTimeInMs), timeSpanFromMetrics(metrics, QueryMetricsConstants.PhysicalPlanBuildTimeInMs), timeSpanFromMetrics(metrics, QueryMetricsConstants.QueryOptimizationTimeInMs));
    }
}
QueryPreparationTimes.zero = new QueryPreparationTimes(TimeSpan.zero, TimeSpan.zero, TimeSpan.zero, TimeSpan.zero);

// Copyright (c) Microsoft Corporation.
class RuntimeExecutionTimes {
    constructor(queryEngineExecutionTime, systemFunctionExecutionTime, userDefinedFunctionExecutionTime) {
        this.queryEngineExecutionTime = queryEngineExecutionTime;
        this.systemFunctionExecutionTime = systemFunctionExecutionTime;
        this.userDefinedFunctionExecutionTime = userDefinedFunctionExecutionTime;
    }
    /**
     * returns a new RuntimeExecutionTimes instance that is the addition of this and the arguments.
     */
    add(...runtimeExecutionTimesArray) {
        let queryEngineExecutionTime = this.queryEngineExecutionTime;
        let systemFunctionExecutionTime = this.systemFunctionExecutionTime;
        let userDefinedFunctionExecutionTime = this.userDefinedFunctionExecutionTime;
        for (const runtimeExecutionTimes of runtimeExecutionTimesArray) {
            if (runtimeExecutionTimes == null) {
                throw new Error("runtimeExecutionTimes has null or undefined item(s)");
            }
            queryEngineExecutionTime = queryEngineExecutionTime.add(runtimeExecutionTimes.queryEngineExecutionTime);
            systemFunctionExecutionTime = systemFunctionExecutionTime.add(runtimeExecutionTimes.systemFunctionExecutionTime);
            userDefinedFunctionExecutionTime = userDefinedFunctionExecutionTime.add(runtimeExecutionTimes.userDefinedFunctionExecutionTime);
        }
        return new RuntimeExecutionTimes(queryEngineExecutionTime, systemFunctionExecutionTime, userDefinedFunctionExecutionTime);
    }
    /**
     * Output the RuntimeExecutionTimes as a delimited string.
     */
    toDelimitedString() {
        return (`${QueryMetricsConstants.SystemFunctionExecuteTimeInMs}=${this.systemFunctionExecutionTime.totalMilliseconds()};` +
            `${QueryMetricsConstants.UserDefinedFunctionExecutionTimeInMs}=${this.userDefinedFunctionExecutionTime.totalMilliseconds()}`);
    }
    /**
     * Returns a new instance of the RuntimeExecutionTimes class that is
     *  the aggregation of an array of RuntimeExecutionTimes.
     */
    static createFromArray(runtimeExecutionTimesArray) {
        if (runtimeExecutionTimesArray == null) {
            throw new Error("runtimeExecutionTimesArray is null or undefined item(s)");
        }
        return RuntimeExecutionTimes.zero.add(...runtimeExecutionTimesArray);
    }
    /**
     * Returns a new instance of the RuntimeExecutionTimes class this is deserialized from a delimited string.
     */
    static createFromDelimitedString(delimitedString) {
        const metrics = parseDelimitedString(delimitedString);
        const vmExecutionTime = timeSpanFromMetrics(metrics, QueryMetricsConstants.VMExecutionTimeInMs);
        const indexLookupTime = timeSpanFromMetrics(metrics, QueryMetricsConstants.IndexLookupTimeInMs);
        const documentLoadTime = timeSpanFromMetrics(metrics, QueryMetricsConstants.DocumentLoadTimeInMs);
        const documentWriteTime = timeSpanFromMetrics(metrics, QueryMetricsConstants.DocumentWriteTimeInMs);
        let queryEngineExecutionTime = TimeSpan.zero;
        queryEngineExecutionTime = queryEngineExecutionTime.add(vmExecutionTime);
        queryEngineExecutionTime = queryEngineExecutionTime.subtract(indexLookupTime);
        queryEngineExecutionTime = queryEngineExecutionTime.subtract(documentLoadTime);
        queryEngineExecutionTime = queryEngineExecutionTime.subtract(documentWriteTime);
        return new RuntimeExecutionTimes(queryEngineExecutionTime, timeSpanFromMetrics(metrics, QueryMetricsConstants.SystemFunctionExecuteTimeInMs), timeSpanFromMetrics(metrics, QueryMetricsConstants.UserDefinedFunctionExecutionTimeInMs));
    }
}
RuntimeExecutionTimes.zero = new RuntimeExecutionTimes(TimeSpan.zero, TimeSpan.zero, TimeSpan.zero);

// Copyright (c) Microsoft Corporation.
class QueryMetrics {
    constructor(retrievedDocumentCount, retrievedDocumentSize, outputDocumentCount, outputDocumentSize, indexHitDocumentCount, totalQueryExecutionTime, queryPreparationTimes, indexLookupTime, documentLoadTime, vmExecutionTime, runtimeExecutionTimes, documentWriteTime, clientSideMetrics) {
        this.retrievedDocumentCount = retrievedDocumentCount;
        this.retrievedDocumentSize = retrievedDocumentSize;
        this.outputDocumentCount = outputDocumentCount;
        this.outputDocumentSize = outputDocumentSize;
        this.indexHitDocumentCount = indexHitDocumentCount;
        this.totalQueryExecutionTime = totalQueryExecutionTime;
        this.queryPreparationTimes = queryPreparationTimes;
        this.indexLookupTime = indexLookupTime;
        this.documentLoadTime = documentLoadTime;
        this.vmExecutionTime = vmExecutionTime;
        this.runtimeExecutionTimes = runtimeExecutionTimes;
        this.documentWriteTime = documentWriteTime;
        this.clientSideMetrics = clientSideMetrics;
    }
    /**
     * Gets the IndexHitRatio
     * @hidden
     */
    get indexHitRatio() {
        return this.retrievedDocumentCount === 0
            ? 1
            : this.indexHitDocumentCount / this.retrievedDocumentCount;
    }
    /**
     * returns a new QueryMetrics instance that is the addition of this and the arguments.
     */
    add(queryMetricsArray) {
        let retrievedDocumentCount = 0;
        let retrievedDocumentSize = 0;
        let outputDocumentCount = 0;
        let outputDocumentSize = 0;
        let indexHitDocumentCount = 0;
        let totalQueryExecutionTime = TimeSpan.zero;
        const queryPreparationTimesArray = [];
        let indexLookupTime = TimeSpan.zero;
        let documentLoadTime = TimeSpan.zero;
        let vmExecutionTime = TimeSpan.zero;
        const runtimeExecutionTimesArray = [];
        let documentWriteTime = TimeSpan.zero;
        const clientSideQueryMetricsArray = [];
        queryMetricsArray.push(this);
        for (const queryMetrics of queryMetricsArray) {
            if (queryMetrics) {
                retrievedDocumentCount += queryMetrics.retrievedDocumentCount;
                retrievedDocumentSize += queryMetrics.retrievedDocumentSize;
                outputDocumentCount += queryMetrics.outputDocumentCount;
                outputDocumentSize += queryMetrics.outputDocumentSize;
                indexHitDocumentCount += queryMetrics.indexHitDocumentCount;
                totalQueryExecutionTime = totalQueryExecutionTime.add(queryMetrics.totalQueryExecutionTime);
                queryPreparationTimesArray.push(queryMetrics.queryPreparationTimes);
                indexLookupTime = indexLookupTime.add(queryMetrics.indexLookupTime);
                documentLoadTime = documentLoadTime.add(queryMetrics.documentLoadTime);
                vmExecutionTime = vmExecutionTime.add(queryMetrics.vmExecutionTime);
                runtimeExecutionTimesArray.push(queryMetrics.runtimeExecutionTimes);
                documentWriteTime = documentWriteTime.add(queryMetrics.documentWriteTime);
                clientSideQueryMetricsArray.push(queryMetrics.clientSideMetrics);
            }
        }
        return new QueryMetrics(retrievedDocumentCount, retrievedDocumentSize, outputDocumentCount, outputDocumentSize, indexHitDocumentCount, totalQueryExecutionTime, QueryPreparationTimes.createFromArray(queryPreparationTimesArray), indexLookupTime, documentLoadTime, vmExecutionTime, RuntimeExecutionTimes.createFromArray(runtimeExecutionTimesArray), documentWriteTime, ClientSideMetrics.createFromArray(...clientSideQueryMetricsArray));
    }
    /**
     * Output the QueryMetrics as a delimited string.
     * @hidden
     */
    toDelimitedString() {
        return (QueryMetricsConstants.RetrievedDocumentCount +
            "=" +
            this.retrievedDocumentCount +
            ";" +
            QueryMetricsConstants.RetrievedDocumentSize +
            "=" +
            this.retrievedDocumentSize +
            ";" +
            QueryMetricsConstants.OutputDocumentCount +
            "=" +
            this.outputDocumentCount +
            ";" +
            QueryMetricsConstants.OutputDocumentSize +
            "=" +
            this.outputDocumentSize +
            ";" +
            QueryMetricsConstants.IndexHitRatio +
            "=" +
            this.indexHitRatio +
            ";" +
            QueryMetricsConstants.TotalQueryExecutionTimeInMs +
            "=" +
            this.totalQueryExecutionTime.totalMilliseconds() +
            ";" +
            this.queryPreparationTimes.toDelimitedString() +
            ";" +
            QueryMetricsConstants.IndexLookupTimeInMs +
            "=" +
            this.indexLookupTime.totalMilliseconds() +
            ";" +
            QueryMetricsConstants.DocumentLoadTimeInMs +
            "=" +
            this.documentLoadTime.totalMilliseconds() +
            ";" +
            QueryMetricsConstants.VMExecutionTimeInMs +
            "=" +
            this.vmExecutionTime.totalMilliseconds() +
            ";" +
            this.runtimeExecutionTimes.toDelimitedString() +
            ";" +
            QueryMetricsConstants.DocumentWriteTimeInMs +
            "=" +
            this.documentWriteTime.totalMilliseconds());
    }
    /**
     * Returns a new instance of the QueryMetrics class that is the aggregation of an array of query metrics.
     */
    static createFromArray(queryMetricsArray) {
        if (!queryMetricsArray) {
            throw new Error("queryMetricsArray is null or undefined item(s)");
        }
        return QueryMetrics.zero.add(queryMetricsArray);
    }
    /**
     * Returns a new instance of the QueryMetrics class this is deserialized from a delimited string.
     */
    static createFromDelimitedString(delimitedString, clientSideMetrics) {
        const metrics = parseDelimitedString(delimitedString);
        const indexHitRatio = metrics[QueryMetricsConstants.IndexHitRatio] || 0;
        const retrievedDocumentCount = metrics[QueryMetricsConstants.RetrievedDocumentCount] || 0;
        const indexHitCount = indexHitRatio * retrievedDocumentCount;
        const outputDocumentCount = metrics[QueryMetricsConstants.OutputDocumentCount] || 0;
        const outputDocumentSize = metrics[QueryMetricsConstants.OutputDocumentSize] || 0;
        const retrievedDocumentSize = metrics[QueryMetricsConstants.RetrievedDocumentSize] || 0;
        const totalQueryExecutionTime = timeSpanFromMetrics(metrics, QueryMetricsConstants.TotalQueryExecutionTimeInMs);
        return new QueryMetrics(retrievedDocumentCount, retrievedDocumentSize, outputDocumentCount, outputDocumentSize, indexHitCount, totalQueryExecutionTime, QueryPreparationTimes.createFromDelimitedString(delimitedString), timeSpanFromMetrics(metrics, QueryMetricsConstants.IndexLookupTimeInMs), timeSpanFromMetrics(metrics, QueryMetricsConstants.DocumentLoadTimeInMs), timeSpanFromMetrics(metrics, QueryMetricsConstants.VMExecutionTimeInMs), RuntimeExecutionTimes.createFromDelimitedString(delimitedString), timeSpanFromMetrics(metrics, QueryMetricsConstants.DocumentWriteTimeInMs), clientSideMetrics || ClientSideMetrics.zero);
    }
}
QueryMetrics.zero = new QueryMetrics(0, 0, 0, 0, 0, TimeSpan.zero, QueryPreparationTimes.zero, TimeSpan.zero, TimeSpan.zero, TimeSpan.zero, RuntimeExecutionTimes.zero, TimeSpan.zero, ClientSideMetrics.zero);

// Copyright (c) Microsoft Corporation.
/** @hidden */
// TODO: docs
function getRequestChargeIfAny(headers) {
    if (typeof headers === "number") {
        return headers;
    }
    else if (typeof headers === "string") {
        return parseFloat(headers);
    }
    if (headers) {
        const rc = headers[Constants.HttpHeaders.RequestCharge];
        if (rc) {
            return parseFloat(rc);
        }
        else {
            return 0;
        }
    }
    else {
        return 0;
    }
}
/**
 * @hidden
 */
function getInitialHeader() {
    const headers = {};
    headers[Constants.HttpHeaders.RequestCharge] = 0;
    headers[Constants.HttpHeaders.QueryMetrics] = {};
    return headers;
}
/**
 * @hidden
 */
// TODO: The name of this method isn't very accurate to what it does
function mergeHeaders(headers, toBeMergedHeaders) {
    if (headers[Constants.HttpHeaders.RequestCharge] === undefined) {
        headers[Constants.HttpHeaders.RequestCharge] = 0;
    }
    if (headers[Constants.HttpHeaders.QueryMetrics] === undefined) {
        headers[Constants.HttpHeaders.QueryMetrics] = QueryMetrics.zero;
    }
    if (!toBeMergedHeaders) {
        return;
    }
    headers[Constants.HttpHeaders.RequestCharge] += getRequestChargeIfAny(toBeMergedHeaders);
    if (toBeMergedHeaders[Constants.HttpHeaders.IsRUPerMinuteUsed]) {
        headers[Constants.HttpHeaders.IsRUPerMinuteUsed] =
            toBeMergedHeaders[Constants.HttpHeaders.IsRUPerMinuteUsed];
    }
    if (Constants.HttpHeaders.QueryMetrics in toBeMergedHeaders) {
        const headerQueryMetrics = headers[Constants.HttpHeaders.QueryMetrics];
        const toBeMergedHeaderQueryMetrics = toBeMergedHeaders[Constants.HttpHeaders.QueryMetrics];
        for (const partitionId in toBeMergedHeaderQueryMetrics) {
            if (headerQueryMetrics[partitionId]) {
                const combinedQueryMetrics = headerQueryMetrics[partitionId].add([
                    toBeMergedHeaderQueryMetrics[partitionId]
                ]);
                headerQueryMetrics[partitionId] = combinedQueryMetrics;
            }
            else {
                headerQueryMetrics[partitionId] = toBeMergedHeaderQueryMetrics[partitionId];
            }
        }
    }
}

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

/** @hidden */
let cosmosLevelFilter = "warn|error";
if (typeof process !== "undefined" && process.env && process.env.COSMOS_LOG_LEVEL) {
    cosmosLevelFilter = process.env.COSMOS_LOG_LEVEL;
}
/** @hidden */
const cosmosDebug = browser("cosmos");
/** @hidden */
const levelLogger = (namespaceLogger, level) => {
    return (message) => {
        if (cosmosLevelFilter.includes(level)) {
            namespaceLogger("[" + new Date().toISOString() + "][" + level + "]: %o", message);
        }
    };
};
/** @hidden */
const logger = (namespace) => {
    const namespaceLogger = cosmosDebug.extend(namespace);
    return {
        silly: levelLogger(namespaceLogger, "silly"),
        debug: levelLogger(namespaceLogger, "debug"),
        info: levelLogger(namespaceLogger, "info"),
        warn: levelLogger(namespaceLogger, "warn"),
        error: levelLogger(namespaceLogger, "error")
    };
};

/** @hidden */
const log = logger("defaultQueryExecutionContext");
/** @hidden */
var STATES;
(function (STATES) {
    STATES["start"] = "start";
    STATES["inProgress"] = "inProgress";
    STATES["ended"] = "ended";
})(STATES || (STATES = {}));
/** @hidden */
class DefaultQueryExecutionContext {
    /**
     * Provides the basic Query Execution Context.
     * This wraps the internal logic query execution using provided fetch functions
     *
     * @param clientContext  - Is used to read the partitionKeyRanges for split proofing
     * @param query          - A SQL query.
     * @param options        - Represents the feed options.
     * @param fetchFunctions - A function to retrieve each page of data.
     *                          An array of functions may be used to query more than one partition.
     * @hidden
     */
    constructor(options, fetchFunctions) {
        this.resources = [];
        this.currentIndex = 0;
        this.currentPartitionIndex = 0;
        this.fetchFunctions = Array.isArray(fetchFunctions) ? fetchFunctions : [fetchFunctions];
        this.options = options || {};
        this.continuationToken = this.options.continuationToken || this.options.continuation || null;
        this.state = DefaultQueryExecutionContext.STATES.start;
    }
    get continuation() {
        return this.continuationToken;
    }
    /**
     * Execute a provided callback on the next element in the execution context.
     */
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            ++this.currentIndex;
            const response = yield this.current();
            return response;
        });
    }
    /**
     * Retrieve the current element on the execution context.
     */
    current() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentIndex < this.resources.length) {
                return {
                    result: this.resources[this.currentIndex],
                    headers: getInitialHeader()
                };
            }
            if (this._canFetchMore()) {
                const { result: resources, headers } = yield this.fetchMore();
                this.resources = resources;
                if (this.resources.length === 0) {
                    if (!this.continuationToken && this.currentPartitionIndex >= this.fetchFunctions.length) {
                        this.state = DefaultQueryExecutionContext.STATES.ended;
                        return { result: undefined, headers };
                    }
                    else {
                        return this.current();
                    }
                }
                return { result: this.resources[this.currentIndex], headers };
            }
            else {
                this.state = DefaultQueryExecutionContext.STATES.ended;
                return { result: undefined, headers: getInitialHeader() };
            }
        });
    }
    /**
     * Determine if there are still remaining resources to processs based on
     * the value of the continuation token or the elements remaining on the current batch in the execution context.
     *
     * @returns true if there is other elements to process in the DefaultQueryExecutionContext.
     */
    hasMoreResults() {
        return (this.state === DefaultQueryExecutionContext.STATES.start ||
            this.continuationToken !== undefined ||
            this.currentIndex < this.resources.length - 1 ||
            this.currentPartitionIndex < this.fetchFunctions.length);
    }
    /**
     * Fetches the next batch of the feed and pass them as an array to a callback
     */
    fetchMore() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentPartitionIndex >= this.fetchFunctions.length) {
                return { headers: getInitialHeader(), result: undefined };
            }
            // Keep to the original continuation and to restore the value after fetchFunction call
            const originalContinuation = this.options.continuationToken || this.options.continuation;
            this.options.continuationToken = this.continuationToken;
            // Return undefined if there is no more results
            if (this.currentPartitionIndex >= this.fetchFunctions.length) {
                return { headers: getInitialHeader(), result: undefined };
            }
            let resources;
            let responseHeaders;
            try {
                let p;
                if (this.nextFetchFunction !== undefined) {
                    log.debug("using prefetch");
                    p = this.nextFetchFunction;
                    this.nextFetchFunction = undefined;
                }
                else {
                    log.debug("using fresh fetch");
                    p = this.fetchFunctions[this.currentPartitionIndex](this.options);
                }
                const response = yield p;
                resources = response.result;
                responseHeaders = response.headers;
                this.continuationToken = responseHeaders[Constants.HttpHeaders.Continuation];
                if (!this.continuationToken) {
                    ++this.currentPartitionIndex;
                }
                if (this.options && this.options.bufferItems === true) {
                    const fetchFunction = this.fetchFunctions[this.currentPartitionIndex];
                    this.nextFetchFunction = fetchFunction
                        ? fetchFunction(Object.assign(Object.assign({}, this.options), { continuationToken: this.continuationToken }))
                        : undefined;
                }
            }
            catch (err) {
                this.state = DefaultQueryExecutionContext.STATES.ended;
                // return callback(err, undefined, responseHeaders);
                // TODO: Error and data being returned is an antipattern, this might broken
                throw err;
            }
            this.state = DefaultQueryExecutionContext.STATES.inProgress;
            this.currentIndex = 0;
            this.options.continuationToken = originalContinuation;
            this.options.continuation = originalContinuation;
            // deserializing query metrics so that we aren't working with delimited strings in the rest of the code base
            if (Constants.HttpHeaders.QueryMetrics in responseHeaders) {
                const delimitedString = responseHeaders[Constants.HttpHeaders.QueryMetrics];
                let queryMetrics = QueryMetrics.createFromDelimitedString(delimitedString);
                // Add the request charge to the query metrics so that we can have per partition request charge.
                if (Constants.HttpHeaders.RequestCharge in responseHeaders) {
                    const requestCharge = Number(responseHeaders[Constants.HttpHeaders.RequestCharge]) || 0;
                    queryMetrics = new QueryMetrics(queryMetrics.retrievedDocumentCount, queryMetrics.retrievedDocumentSize, queryMetrics.outputDocumentCount, queryMetrics.outputDocumentSize, queryMetrics.indexHitDocumentCount, queryMetrics.totalQueryExecutionTime, queryMetrics.queryPreparationTimes, queryMetrics.indexLookupTime, queryMetrics.documentLoadTime, queryMetrics.vmExecutionTime, queryMetrics.runtimeExecutionTimes, queryMetrics.documentWriteTime, new ClientSideMetrics(requestCharge));
                }
                // Wraping query metrics in a object where the key is '0' just so single partition
                // and partition queries have the same response schema
                responseHeaders[Constants.HttpHeaders.QueryMetrics] = {};
                responseHeaders[Constants.HttpHeaders.QueryMetrics]["0"] = queryMetrics;
            }
            return { result: resources, headers: responseHeaders };
        });
    }
    _canFetchMore() {
        const res = this.state === DefaultQueryExecutionContext.STATES.start ||
            (this.continuationToken && this.state === DefaultQueryExecutionContext.STATES.inProgress) ||
            (this.currentPartitionIndex < this.fetchFunctions.length &&
                this.state === DefaultQueryExecutionContext.STATES.inProgress);
        return res;
    }
}
DefaultQueryExecutionContext.STATES = STATES;

/** @hidden */
class AverageAggregator {
    /**
     * Add the provided item to aggregation result.
     */
    aggregate(other) {
        if (other == null || other.sum == null) {
            return;
        }
        if (this.sum == null) {
            this.sum = 0.0;
            this.count = 0;
        }
        this.sum += other.sum;
        this.count += other.count;
    }
    /**
     * Get the aggregation result.
     */
    getResult() {
        if (this.sum == null || this.count <= 0) {
            return undefined;
        }
        return this.sum / this.count;
    }
}

/** @hidden */
class CountAggregator {
    /**
     * Represents an aggregator for COUNT operator.
     * @hidden
     */
    constructor() {
        this.value = 0;
    }
    /**
     * Add the provided item to aggregation result.
     */
    aggregate(other) {
        this.value += other;
    }
    /**
     * Get the aggregation result.
     */
    getResult() {
        return this.value;
    }
}

// TODO: this smells funny
/** @hidden */
const TYPEORDCOMPARATOR = Object.freeze({
    NoValue: {
        ord: 0
    },
    undefined: {
        ord: 1
    },
    boolean: {
        ord: 2,
        compFunc: (a, b) => {
            return a === b ? 0 : a > b ? 1 : -1;
        }
    },
    number: {
        ord: 4,
        compFunc: (a, b) => {
            return a === b ? 0 : a > b ? 1 : -1;
        }
    },
    string: {
        ord: 5,
        compFunc: (a, b) => {
            return a === b ? 0 : a > b ? 1 : -1;
        }
    }
});
/** @hidden */
class OrderByDocumentProducerComparator {
    constructor(sortOrder) {
        this.sortOrder = sortOrder;
    } // TODO: This should be an enum
    targetPartitionKeyRangeDocProdComparator(docProd1, docProd2) {
        const a = docProd1.getTargetParitionKeyRange()["minInclusive"];
        const b = docProd2.getTargetParitionKeyRange()["minInclusive"];
        return a === b ? 0 : a > b ? 1 : -1;
    }
    compare(docProd1, docProd2) {
        // Need to check for split, since we don't want to dereference "item" of undefined / exception
        if (docProd1.gotSplit()) {
            return -1;
        }
        if (docProd2.gotSplit()) {
            return 1;
        }
        const orderByItemsRes1 = this.getOrderByItems(docProd1.peekBufferedItems()[0]);
        const orderByItemsRes2 = this.getOrderByItems(docProd2.peekBufferedItems()[0]);
        // validate order by items and types
        // TODO: once V1 order by on different types is fixed this need to change
        this.validateOrderByItems(orderByItemsRes1, orderByItemsRes2);
        // no async call in the for loop
        for (let i = 0; i < orderByItemsRes1.length; i++) {
            // compares the orderby items one by one
            const compRes = this.compareOrderByItem(orderByItemsRes1[i], orderByItemsRes2[i]);
            if (compRes !== 0) {
                if (this.sortOrder[i] === "Ascending") {
                    return compRes;
                }
                else if (this.sortOrder[i] === "Descending") {
                    return -compRes;
                }
            }
        }
        return this.targetPartitionKeyRangeDocProdComparator(docProd1, docProd2);
    }
    // TODO: This smells funny
    compareValue(item1, type1, item2, type2) {
        if (type1 === "object" || type2 === "object") {
            throw new Error("Tried to compare an object type");
        }
        const type1Ord = TYPEORDCOMPARATOR[type1].ord;
        const type2Ord = TYPEORDCOMPARATOR[type2].ord;
        const typeCmp = type1Ord - type2Ord;
        if (typeCmp !== 0) {
            // if the types are different, use type ordinal
            return typeCmp;
        }
        // both are of the same type
        if (type1Ord === TYPEORDCOMPARATOR["undefined"].ord ||
            type1Ord === TYPEORDCOMPARATOR["NoValue"].ord) {
            // if both types are undefined or Null they are equal
            return 0;
        }
        const compFunc = TYPEORDCOMPARATOR[type1].compFunc;
        if (typeof compFunc === "undefined") {
            throw new Error("Cannot find the comparison function");
        }
        // same type and type is defined compare the items
        return compFunc(item1, item2);
    }
    compareOrderByItem(orderByItem1, orderByItem2) {
        const type1 = this.getType(orderByItem1);
        const type2 = this.getType(orderByItem2);
        return this.compareValue(orderByItem1["item"], type1, orderByItem2["item"], type2);
    }
    validateOrderByItems(res1, res2) {
        if (res1.length !== res2.length) {
            throw new Error(`Expected ${res1.length}, but got ${res2.length}.`);
        }
        if (res1.length !== this.sortOrder.length) {
            throw new Error("orderByItems cannot have a different size than sort orders.");
        }
        for (let i = 0; i < this.sortOrder.length; i++) {
            const type1 = this.getType(res1[i]);
            const type2 = this.getType(res2[i]);
            if (type1 !== type2) {
                throw new Error(`Expected ${type1}, but got ${type2}. Cannot execute cross partition order-by queries on mixed types. Consider filtering your query using IS_STRING or IS_NUMBER to get around this exception.`);
            }
        }
    }
    getType(orderByItem) {
        // TODO: any item?
        if (orderByItem === undefined || orderByItem.item === undefined) {
            return "NoValue";
        }
        const type = typeof orderByItem.item;
        if (TYPEORDCOMPARATOR[type] === undefined) {
            throw new Error(`unrecognizable type ${type}`);
        }
        return type;
    }
    getOrderByItems(res) {
        // TODO: any res?
        return res["orderByItems"];
    }
}

// Copyright (c) Microsoft Corporation.
/** @hidden */
class MaxAggregator {
    /**
     * Represents an aggregator for MAX operator.
     * @hidden
     */
    constructor() {
        this.value = undefined;
        this.comparer = new OrderByDocumentProducerComparator(["Ascending"]);
    }
    /**
     * Add the provided item to aggregation result.
     */
    aggregate(other) {
        if (this.value === undefined) {
            this.value = other.max;
        }
        else if (this.comparer.compareValue(other.max, typeof other.max, this.value, typeof this.value) > 0) {
            this.value = other.max;
        }
    }
    /**
     * Get the aggregation result.
     */
    getResult() {
        return this.value;
    }
}

// Copyright (c) Microsoft Corporation.
/** @hidden */
class MinAggregator {
    /**
     * Represents an aggregator for MIN operator.
     * @hidden
     */
    constructor() {
        this.value = undefined;
        this.comparer = new OrderByDocumentProducerComparator(["Ascending"]);
    }
    /**
     * Add the provided item to aggregation result.
     */
    aggregate(other) {
        if (this.value === undefined) {
            // || typeof this.value === "object"
            this.value = other.min;
        }
        else {
            const otherType = other.min === null ? "NoValue" : typeof other.min; // || typeof other === "object"
            const thisType = this.value === null ? "NoValue" : typeof this.value;
            if (this.comparer.compareValue(other.min, otherType, this.value, thisType) < 0) {
                this.value = other.min;
            }
        }
    }
    /**
     * Get the aggregation result.
     */
    getResult() {
        return this.value;
    }
}

/** @hidden */
class SumAggregator {
    /**
     * Add the provided item to aggregation result.
     */
    aggregate(other) {
        if (other === undefined) {
            return;
        }
        if (this.sum === undefined) {
            this.sum = other;
        }
        else {
            this.sum += other;
        }
    }
    /**
     * Get the aggregation result.
     */
    getResult() {
        return this.sum;
    }
}

/** @hidden */
class StaticValueAggregator {
    aggregate(other) {
        if (this.value === undefined) {
            this.value = other;
        }
    }
    getResult() {
        return this.value;
    }
}

// Copyright (c) Microsoft Corporation.
function createAggregator(aggregateType) {
    switch (aggregateType) {
        case "Average":
            return new AverageAggregator();
        case "Count":
            return new CountAggregator();
        case "Max":
            return new MaxAggregator();
        case "Min":
            return new MinAggregator();
        case "Sum":
            return new SumAggregator();
        default:
            return new StaticValueAggregator();
    }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/** @hidden */
var FetchResultType;
(function (FetchResultType) {
    FetchResultType[FetchResultType["Done"] = 0] = "Done";
    FetchResultType[FetchResultType["Exception"] = 1] = "Exception";
    FetchResultType[FetchResultType["Result"] = 2] = "Result";
})(FetchResultType || (FetchResultType = {}));
/** @hidden */
class FetchResult {
    /**
     * Wraps fetch results for the document producer.
     * This allows the document producer to buffer exceptions so that actual results don't get flushed during splits.
     *
     * @param feedReponse - The response the document producer got back on a successful fetch
     * @param error - The exception meant to be buffered on an unsuccessful fetch
     * @hidden
     */
    constructor(feedResponse, error) {
        // TODO: feedResponse/error
        if (feedResponse) {
            this.feedResponse = feedResponse;
            this.fetchResultType = FetchResultType.Result;
        }
        else {
            this.error = error;
            this.fetchResultType = FetchResultType.Exception;
        }
    }
}

/** @hidden */
class DocumentProducer {
    /**
     * Provides the Target Partition Range Query Execution Context.
     * @param clientContext  - The service endpoint to use to create the client.
     * @param collectionLink - Represents collection link
     * @param query          - A SQL query.
     * @param targetPartitionKeyRange - Query Target Partition key Range
     * @hidden
     */
    constructor(clientContext, collectionLink, query, targetPartitionKeyRange, options) {
        this.clientContext = clientContext;
        this.generation = 0;
        this.fetchFunction = (options) => __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.collectionLink, ResourceType.item);
            const id = getIdFromLink(this.collectionLink);
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.item,
                resourceId: id,
                resultFn: (result) => result.Documents,
                query: this.query,
                options,
                partitionKeyRangeId: this.targetPartitionKeyRange["id"]
            });
        });
        // TODO: any options
        this.collectionLink = collectionLink;
        this.query = query;
        this.targetPartitionKeyRange = targetPartitionKeyRange;
        this.fetchResults = [];
        this.allFetched = false;
        this.err = undefined;
        this.previousContinuationToken = undefined;
        this.continuationToken = undefined;
        this.respHeaders = getInitialHeader();
        this.internalExecutionContext = new DefaultQueryExecutionContext(options, this.fetchFunction);
    }
    /**
     * Synchronously gives the contiguous buffered results (stops at the first non result) if any
     * @returns buffered current items if any
     * @hidden
     */
    peekBufferedItems() {
        const bufferedResults = [];
        for (let i = 0, done = false; i < this.fetchResults.length && !done; i++) {
            const fetchResult = this.fetchResults[i];
            switch (fetchResult.fetchResultType) {
                case FetchResultType.Done:
                    done = true;
                    break;
                case FetchResultType.Exception:
                    done = true;
                    break;
                case FetchResultType.Result:
                    bufferedResults.push(fetchResult.feedResponse);
                    break;
            }
        }
        return bufferedResults;
    }
    hasMoreResults() {
        return this.internalExecutionContext.hasMoreResults() || this.fetchResults.length !== 0;
    }
    gotSplit() {
        const fetchResult = this.fetchResults[0];
        if (fetchResult.fetchResultType === FetchResultType.Exception) {
            if (DocumentProducer._needPartitionKeyRangeCacheRefresh(fetchResult.error)) {
                return true;
            }
        }
        return false;
    }
    _getAndResetActiveResponseHeaders() {
        const ret = this.respHeaders;
        this.respHeaders = getInitialHeader();
        return ret;
    }
    _updateStates(err, allFetched) {
        // TODO: any Error
        if (err) {
            this.err = err;
            return;
        }
        if (allFetched) {
            this.allFetched = true;
        }
        if (this.internalExecutionContext.continuationToken === this.continuationToken) {
            // nothing changed
            return;
        }
        this.previousContinuationToken = this.continuationToken;
        this.continuationToken = this.internalExecutionContext.continuationToken;
    }
    static _needPartitionKeyRangeCacheRefresh(error) {
        // TODO: error
        return (error.code === StatusCodes.Gone &&
            "substatus" in error &&
            error["substatus"] === SubStatusCodes.PartitionKeyRangeGone);
    }
    /**
     * Fetches and bufferes the next page of results and executes the given callback
     */
    bufferMore() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.err) {
                throw this.err;
            }
            try {
                const { result: resources, headers: headerResponse } = yield this.internalExecutionContext.fetchMore();
                ++this.generation;
                this._updateStates(undefined, resources === undefined);
                if (resources !== undefined) {
                    // some more results
                    resources.forEach((element) => {
                        // TODO: resources any
                        this.fetchResults.push(new FetchResult(element, undefined));
                    });
                }
                // need to modify the header response so that the query metrics are per partition
                if (headerResponse != null && Constants.HttpHeaders.QueryMetrics in headerResponse) {
                    // "0" is the default partition before one is actually assigned.
                    const queryMetrics = headerResponse[Constants.HttpHeaders.QueryMetrics]["0"];
                    // Wraping query metrics in a object where the keys are the partition key range.
                    headerResponse[Constants.HttpHeaders.QueryMetrics] = {};
                    headerResponse[Constants.HttpHeaders.QueryMetrics][this.targetPartitionKeyRange.id] = queryMetrics;
                }
                return { result: resources, headers: headerResponse };
            }
            catch (err) {
                // TODO: any error
                if (DocumentProducer._needPartitionKeyRangeCacheRefresh(err)) {
                    // Split just happend
                    // Buffer the error so the execution context can still get the feedResponses in the itemBuffer
                    const bufferedError = new FetchResult(undefined, err);
                    this.fetchResults.push(bufferedError);
                    // Putting a dummy result so that the rest of code flows
                    return { result: [bufferedError], headers: err.headers };
                }
                else {
                    this._updateStates(err, err.resources === undefined);
                    throw err;
                }
            }
        });
    }
    /**
     * Synchronously gives the bufferend current item if any
     * @returns buffered current item if any
     * @hidden
     */
    getTargetParitionKeyRange() {
        return this.targetPartitionKeyRange;
    }
    /**
     * Fetches the next element in the DocumentProducer.
     */
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.err) {
                this._updateStates(this.err, undefined);
                throw this.err;
            }
            try {
                const { result, headers } = yield this.current();
                const fetchResult = this.fetchResults.shift();
                this._updateStates(undefined, result === undefined);
                if (fetchResult.feedResponse !== result) {
                    throw new Error(`Expected ${fetchResult.feedResponse} to equal ${result}`);
                }
                switch (fetchResult.fetchResultType) {
                    case FetchResultType.Done:
                        return { result: undefined, headers };
                    case FetchResultType.Exception:
                        fetchResult.error.headers = headers;
                        throw fetchResult.error;
                    case FetchResultType.Result:
                        return { result: fetchResult.feedResponse, headers };
                }
            }
            catch (err) {
                this._updateStates(err, err.item === undefined);
                throw err;
            }
        });
    }
    /**
     * Retrieve the current element on the DocumentProducer.
     */
    current() {
        return __awaiter(this, void 0, void 0, function* () {
            // If something is buffered just give that
            if (this.fetchResults.length > 0) {
                const fetchResult = this.fetchResults[0];
                // Need to unwrap fetch results
                switch (fetchResult.fetchResultType) {
                    case FetchResultType.Done:
                        return {
                            result: undefined,
                            headers: this._getAndResetActiveResponseHeaders()
                        };
                    case FetchResultType.Exception:
                        fetchResult.error.headers = this._getAndResetActiveResponseHeaders();
                        throw fetchResult.error;
                    case FetchResultType.Result:
                        return {
                            result: fetchResult.feedResponse,
                            headers: this._getAndResetActiveResponseHeaders()
                        };
                }
            }
            // If there isn't anymore items left to fetch then let the user know.
            if (this.allFetched) {
                return {
                    result: undefined,
                    headers: this._getAndResetActiveResponseHeaders()
                };
            }
            // If there are no more bufferd items and there are still items to be fetched then buffer more
            const { result, headers } = yield this.bufferMore();
            mergeHeaders(this.respHeaders, headers);
            if (result === undefined) {
                return { result: undefined, headers: this.respHeaders };
            }
            return this.current();
        });
    }
}

/**
 * Expose `PriorityQueue`.
 */
var priorityqueuejs = PriorityQueue;

/**
 * Initializes a new empty `PriorityQueue` with the given `comparator(a, b)`
 * function, uses `.DEFAULT_COMPARATOR()` when no function is provided.
 *
 * The comparator function must return a positive number when `a > b`, 0 when
 * `a == b` and a negative number when `a < b`.
 *
 * @param {Function}
 * @return {PriorityQueue}
 * @api public
 */
function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

/**
 * Compares `a` and `b`, when `a > b` it returns a positive number, when
 * it returns 0 and when `a < b` it returns a negative number.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 * @return {Number}
 * @api public
 */
PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return (a > b) ? 1 : -1;
  }
};

/**
 * Returns whether the priority queue is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
PriorityQueue.prototype.isEmpty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');

  return this._elements[0];
};

/**
 * Dequeues the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.deq = function() {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = (2 * current) + 1;
    var right = (2 * current) + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

/**
 * Enqueues the `element` at the priority queue and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.enq = function(element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

/**
 * Returns the size of the priority queue.
 *
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.size = function() {
  return this._elements.length;
};

/**
 *  Iterates over queue elements
 *
 *  @param {Function} fn
 */
PriorityQueue.prototype.forEach = function(fn) {
  return this._elements.forEach(fn);
};

/**
 * Compares the values at position `a` and `b` in the priority queue using its
 * comparator function.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @api private
 */
PriorityQueue.prototype._compare = function(a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

/**
 * Swaps the values at position `a` and `b` in the priority queue.
 *
 * @param {Number} a
 * @param {Number} b
 * @api private
 */
PriorityQueue.prototype._swap = function(a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

var semaphore = createCommonjsModule(function (module, exports) {
(function(global) {

var nextTick = function (fn) { setTimeout(fn, 0); };
if (typeof process != 'undefined' && process && typeof process.nextTick == 'function') {
	// node.js and the like
	nextTick = process.nextTick;
}

function semaphore(capacity) {
	var semaphore = {
		capacity: capacity || 1,
		current: 0,
		queue: [],
		firstHere: false,

		take: function() {
			if (semaphore.firstHere === false) {
        			semaphore.current++;
        			semaphore.firstHere = true;
        			var isFirst = 1;
      			} else {
        			var isFirst = 0;
      			}
			var item = { n: 1 };

			if (typeof arguments[0] == 'function') {
				item.task = arguments[0];
			} else {
				item.n = arguments[0];
			}

			if (arguments.length >= 2)  {
				if (typeof arguments[1] == 'function') item.task = arguments[1];
				else item.n = arguments[1];
			}

			var task = item.task;
			item.task = function() { task(semaphore.leave); };

			if (semaphore.current + item.n - isFirst > semaphore.capacity) {
        			if (isFirst === 1) {
        				semaphore.current--;
        				semaphore.firstHere = false;
        			}
				return semaphore.queue.push(item);
			}

			semaphore.current += item.n - isFirst;
			item.task(semaphore.leave);
      			if (isFirst === 1) semaphore.firstHere = false;
		},

		leave: function(n) {
			n = n || 1;

			semaphore.current -= n;

			if (!semaphore.queue.length) {
				if (semaphore.current < 0) {
					throw new Error('leave called too many times.');
				}

				return;
			}

			var item = semaphore.queue[0];

			if (item.n + semaphore.current > semaphore.capacity) {
				return;
			}

			semaphore.queue.shift();
			semaphore.current += item.n;

			nextTick(item.task);
		},

		available: function(n) {
			n = n || 1;
			return(semaphore.current + n <= semaphore.capacity);
		}
	};

	return semaphore;
}
{
    // node export
    module.exports = semaphore;
}
}());
});

/** @hidden */
class QueryRange {
    /**
     * Represents a QueryRange.
     *
     * @param rangeMin                - min
     * @param rangeMin                - max
     * @param isMinInclusive         - isMinInclusive
     * @param isMaxInclusive         - isMaxInclusive
     * @hidden
     */
    constructor(rangeMin, rangeMax, isMinInclusive, isMaxInclusive) {
        this.min = rangeMin;
        this.max = rangeMax;
        this.isMinInclusive = isMinInclusive;
        this.isMaxInclusive = isMaxInclusive;
    }
    overlaps(other) {
        const range1 = this; // eslint-disable-line @typescript-eslint/no-this-alias
        const range2 = other;
        if (range1 === undefined || range2 === undefined) {
            return false;
        }
        if (range1.isEmpty() || range2.isEmpty()) {
            return false;
        }
        if (range1.min <= range2.max || range2.min <= range1.max) {
            if ((range1.min === range2.max && !(range1.isMinInclusive && range2.isMaxInclusive)) ||
                (range2.min === range1.max && !(range2.isMinInclusive && range1.isMaxInclusive))) {
                return false;
            }
            return true;
        }
        return false;
    }
    isFullRange() {
        return (this.min === Constants.EffectiveParitionKeyConstants.MinimumInclusiveEffectivePartitionKey &&
            this.max === Constants.EffectiveParitionKeyConstants.MaximumExclusiveEffectivePartitionKey &&
            this.isMinInclusive === true &&
            this.isMaxInclusive === false);
    }
    isEmpty() {
        return !(this.isMinInclusive && this.isMaxInclusive) && this.min === this.max;
    }
    /**
     * Parse a QueryRange from a partitionKeyRange
     * @returns QueryRange
     * @hidden
     */
    static parsePartitionKeyRange(partitionKeyRange) {
        return new QueryRange(partitionKeyRange[Constants.PartitionKeyRange.MinInclusive], partitionKeyRange[Constants.PartitionKeyRange.MaxExclusive], true, false);
    }
    /**
     * Parse a QueryRange from a dictionary
     * @returns QueryRange
     * @hidden
     */
    static parseFromDict(queryRangeDict) {
        return new QueryRange(queryRangeDict.min, queryRangeDict.max, queryRangeDict.isMinInclusive, queryRangeDict.isMaxInclusive);
    }
}

/** @hidden */
class InMemoryCollectionRoutingMap {
    /**
     * Represents a InMemoryCollectionRoutingMap Object,
     * Stores partition key ranges in an efficient way with some additional information and provides
     * convenience methods for working with set of ranges.
     */
    constructor(orderedPartitionKeyRanges, orderedPartitionInfo) {
        this.orderedPartitionKeyRanges = orderedPartitionKeyRanges;
        this.orderedRanges = orderedPartitionKeyRanges.map((pkr) => {
            return new QueryRange(pkr[Constants.PartitionKeyRange.MinInclusive], pkr[Constants.PartitionKeyRange.MaxExclusive], true, false);
        });
        this.orderedPartitionInfo = orderedPartitionInfo;
    }
    getOrderedParitionKeyRanges() {
        return this.orderedPartitionKeyRanges;
    }
    getOverlappingRanges(providedQueryRanges) {
        // TODO This code has all kinds of smells. Multiple iterations and sorts just to grab overlapping ranges
        // stfaul attempted to bring it down to one for-loop and failed
        const pqr = Array.isArray(providedQueryRanges)
            ? providedQueryRanges
            : [providedQueryRanges];
        const minToPartitionRange = {}; // TODO: any
        // this for loop doesn't invoke any async callback
        for (const queryRange of pqr) {
            if (queryRange.isEmpty()) {
                continue;
            }
            if (queryRange.isFullRange()) {
                return this.orderedPartitionKeyRanges;
            }
            const minIndex = this.orderedRanges.findIndex((range) => {
                if (queryRange.min > range.min && queryRange.min < range.max) {
                    return true;
                }
                if (queryRange.min === range.min) {
                    return true;
                }
                if (queryRange.min === range.max) {
                    return true;
                }
            });
            if (minIndex < 0) {
                throw new Error("error in collection routing map, queried value is less than the start range.");
            }
            // Start at the end and work backwards
            let maxIndex;
            for (let i = this.orderedRanges.length - 1; i >= 0; i--) {
                const range = this.orderedRanges[i];
                if (queryRange.max > range.min && queryRange.max < range.max) {
                    maxIndex = i;
                    break;
                }
                if (queryRange.max === range.min) {
                    maxIndex = i;
                    break;
                }
                if (queryRange.max === range.max) {
                    maxIndex = i;
                    break;
                }
            }
            if (maxIndex > this.orderedRanges.length) {
                throw new Error("error in collection routing map, queried value is greater than the end range.");
            }
            for (let j = minIndex; j < maxIndex + 1; j++) {
                if (queryRange.overlaps(this.orderedRanges[j])) {
                    minToPartitionRange[this.orderedPartitionKeyRanges[j][Constants.PartitionKeyRange.MinInclusive]] = this.orderedPartitionKeyRanges[j];
                }
            }
        }
        const overlappingPartitionKeyRanges = Object.keys(minToPartitionRange).map((k) => minToPartitionRange[k]);
        return overlappingPartitionKeyRanges.sort((a, b) => {
            return a[Constants.PartitionKeyRange.MinInclusive].localeCompare(b[Constants.PartitionKeyRange.MinInclusive]);
        });
    }
}

// Copyright (c) Microsoft Corporation.
/**
 * @hidden
 */
function compareRanges(a, b) {
    const aVal = a[0][Constants.PartitionKeyRange.MinInclusive];
    const bVal = b[0][Constants.PartitionKeyRange.MinInclusive];
    if (aVal > bVal) {
        return 1;
    }
    if (aVal < bVal) {
        return -1;
    }
    return 0;
}
/** @hidden */
function createCompleteRoutingMap(partitionKeyRangeInfoTuppleList) {
    const rangeById = {}; // TODO: any
    const rangeByInfo = {}; // TODO: any
    let sortedRanges = [];
    // the for loop doesn't invoke any async callback
    for (const r of partitionKeyRangeInfoTuppleList) {
        rangeById[r[0][Constants.PartitionKeyRange.Id]] = r;
        rangeByInfo[r[1]] = r[0];
        sortedRanges.push(r);
    }
    sortedRanges = sortedRanges.sort(compareRanges);
    const partitionKeyOrderedRange = sortedRanges.map((r) => r[0]);
    const orderedPartitionInfo = sortedRanges.map((r) => r[1]);
    if (!isCompleteSetOfRange(partitionKeyOrderedRange)) {
        return undefined;
    }
    return new InMemoryCollectionRoutingMap(partitionKeyOrderedRange, orderedPartitionInfo);
}
/**
 * @hidden
 */
function isCompleteSetOfRange(partitionKeyOrderedRange) {
    // TODO: any
    let isComplete = false;
    if (partitionKeyOrderedRange.length > 0) {
        const firstRange = partitionKeyOrderedRange[0];
        const lastRange = partitionKeyOrderedRange[partitionKeyOrderedRange.length - 1];
        isComplete =
            firstRange[Constants.PartitionKeyRange.MinInclusive] ===
                Constants.EffectiveParitionKeyConstants.MinimumInclusiveEffectivePartitionKey;
        isComplete =
            isComplete &&
                lastRange[Constants.PartitionKeyRange.MaxExclusive] ===
                    Constants.EffectiveParitionKeyConstants.MaximumExclusiveEffectivePartitionKey;
        for (let i = 1; i < partitionKeyOrderedRange.length; i++) {
            const previousRange = partitionKeyOrderedRange[i - 1];
            const currentRange = partitionKeyOrderedRange[i];
            isComplete =
                isComplete &&
                    previousRange[Constants.PartitionKeyRange.MaxExclusive] ===
                        currentRange[Constants.PartitionKeyRange.MinInclusive];
            if (!isComplete) {
                if (previousRange[Constants.PartitionKeyRange.MaxExclusive] >
                    currentRange[Constants.PartitionKeyRange.MinInclusive]) {
                    throw Error("Ranges overlap");
                }
                break;
            }
        }
    }
    return isComplete;
}

/** @hidden */
class PartitionKeyRangeCache {
    constructor(clientContext) {
        this.clientContext = clientContext;
        this.collectionRoutingMapByCollectionId = {};
    }
    /**
     * Finds or Instantiates the requested Collection Routing Map
     * @param collectionLink - Requested collectionLink
     * @hidden
     */
    onCollectionRoutingMap(collectionLink) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectionId = getIdFromLink(collectionLink);
            if (this.collectionRoutingMapByCollectionId[collectionId] === undefined) {
                this.collectionRoutingMapByCollectionId[collectionId] = this.requestCollectionRoutingMap(collectionLink);
            }
            return this.collectionRoutingMapByCollectionId[collectionId];
        });
    }
    /**
     * Given the query ranges and a collection, invokes the callback on the list of overlapping partition key ranges
     * @hidden
     */
    getOverlappingRanges(collectionLink, queryRange) {
        return __awaiter(this, void 0, void 0, function* () {
            const crm = yield this.onCollectionRoutingMap(collectionLink);
            return crm.getOverlappingRanges(queryRange);
        });
    }
    requestCollectionRoutingMap(collectionLink) {
        return __awaiter(this, void 0, void 0, function* () {
            const { resources } = yield this.clientContext
                .queryPartitionKeyRanges(collectionLink)
                .fetchAll();
            return createCompleteRoutingMap(resources.map((r) => [r, true]));
        });
    }
}

/** @hidden */
const PARITIONKEYRANGE = Constants.PartitionKeyRange;
/** @hidden */
class SmartRoutingMapProvider {
    constructor(clientContext) {
        this.partitionKeyRangeCache = new PartitionKeyRangeCache(clientContext);
    }
    static _secondRangeIsAfterFirstRange(range1, range2) {
        if (typeof range1.max === "undefined") {
            throw new Error("range1 must have max");
        }
        if (typeof range2.min === "undefined") {
            throw new Error("range2 must have min");
        }
        if (range1.max > range2.min) {
            // r.min < #previous_r.max
            return false;
        }
        else {
            if (range1.max === range2.min && range1.isMaxInclusive && range2.isMinInclusive) {
                // the inclusive ending endpoint of previous_r is the same as the inclusive beginning endpoint of r
                // they share a point
                return false;
            }
            return true;
        }
    }
    static _isSortedAndNonOverlapping(ranges) {
        for (let idx = 1; idx < ranges.length; idx++) {
            const previousR = ranges[idx - 1];
            const r = ranges[idx];
            if (!this._secondRangeIsAfterFirstRange(previousR, r)) {
                return false;
            }
        }
        return true;
    }
    static _stringMax(a, b) {
        return a >= b ? a : b;
    }
    static _stringCompare(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    }
    static _subtractRange(r, partitionKeyRange) {
        const left = this._stringMax(partitionKeyRange[PARITIONKEYRANGE.MaxExclusive], r.min);
        const leftInclusive = this._stringCompare(left, r.min) === 0 ? r.isMinInclusive : false;
        return new QueryRange(left, r.max, leftInclusive, r.isMaxInclusive);
    }
    /**
     * Given the sorted ranges and a collection, invokes the callback on the list of overlapping partition key ranges
     * @param callback - Function execute on the overlapping partition key ranges result,
     *                   takes two parameters error, partition key ranges
     * @hidden
     */
    getOverlappingRanges(collectionLink, sortedRanges) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate if the list is non- overlapping and sorted                             TODO: any PartitionKeyRanges
            if (!SmartRoutingMapProvider._isSortedAndNonOverlapping(sortedRanges)) {
                throw new Error("the list of ranges is not a non-overlapping sorted ranges");
            }
            let partitionKeyRanges = []; // TODO: any ParitionKeyRanges
            if (sortedRanges.length === 0) {
                return partitionKeyRanges;
            }
            const collectionRoutingMap = yield this.partitionKeyRangeCache.onCollectionRoutingMap(collectionLink);
            let index = 0;
            let currentProvidedRange = sortedRanges[index];
            for (;;) {
                if (currentProvidedRange.isEmpty()) {
                    // skip and go to the next item
                    if (++index >= sortedRanges.length) {
                        return partitionKeyRanges;
                    }
                    currentProvidedRange = sortedRanges[index];
                    continue;
                }
                let queryRange;
                if (partitionKeyRanges.length > 0) {
                    queryRange = SmartRoutingMapProvider._subtractRange(currentProvidedRange, partitionKeyRanges[partitionKeyRanges.length - 1]);
                }
                else {
                    queryRange = currentProvidedRange;
                }
                const overlappingRanges = collectionRoutingMap.getOverlappingRanges(queryRange);
                if (overlappingRanges.length <= 0) {
                    throw new Error(`error: returned overlapping ranges for queryRange ${queryRange} is empty`);
                }
                partitionKeyRanges = partitionKeyRanges.concat(overlappingRanges);
                const lastKnownTargetRange = QueryRange.parsePartitionKeyRange(partitionKeyRanges[partitionKeyRanges.length - 1]);
                if (!lastKnownTargetRange) {
                    throw new Error("expected lastKnowTargetRange to be truthy");
                }
                // the overlapping ranges must contain the requested range
                if (SmartRoutingMapProvider._stringCompare(currentProvidedRange.max, lastKnownTargetRange.max) >
                    0) {
                    throw new Error(`error: returned overlapping ranges ${overlappingRanges} \
        does not contain the requested range ${queryRange}`);
                }
                // the current range is contained in partitionKeyRanges just move forward
                if (++index >= sortedRanges.length) {
                    return partitionKeyRanges;
                }
                currentProvidedRange = sortedRanges[index];
                while (SmartRoutingMapProvider._stringCompare(currentProvidedRange.max, lastKnownTargetRange.max) <= 0) {
                    // the current range is covered too.just move forward
                    if (++index >= sortedRanges.length) {
                        return partitionKeyRanges;
                    }
                    currentProvidedRange = sortedRanges[index];
                }
            }
        });
    }
}

/** @hidden */
const log$1 = logger("parallelQueryExecutionContextBase");
/** @hidden */
var ParallelQueryExecutionContextBaseStates;
(function (ParallelQueryExecutionContextBaseStates) {
    ParallelQueryExecutionContextBaseStates["started"] = "started";
    ParallelQueryExecutionContextBaseStates["inProgress"] = "inProgress";
    ParallelQueryExecutionContextBaseStates["ended"] = "ended";
})(ParallelQueryExecutionContextBaseStates || (ParallelQueryExecutionContextBaseStates = {}));
/** @hidden */
class ParallelQueryExecutionContextBase {
    /**
     * Provides the ParallelQueryExecutionContextBase.
     * This is the base class that ParallelQueryExecutionContext and OrderByQueryExecutionContext will derive from.
     *
     * When handling a parallelized query, it instantiates one instance of
     * DocumentProcuder per target partition key range and aggregates the result of each.
     *
     * @param clientContext - The service endpoint to use to create the client.
     * @param collectionLink - The Collection Link
     * @param options - Represents the feed options.
     * @param partitionedQueryExecutionInfo - PartitionedQueryExecutionInfo
     * @hidden
     */
    constructor(clientContext, collectionLink, query, options, partitionedQueryExecutionInfo) {
        this.clientContext = clientContext;
        this.collectionLink = collectionLink;
        this.query = query;
        this.options = options;
        this.partitionedQueryExecutionInfo = partitionedQueryExecutionInfo;
        this.clientContext = clientContext;
        this.collectionLink = collectionLink;
        this.query = query;
        this.options = options;
        this.partitionedQueryExecutionInfo = partitionedQueryExecutionInfo;
        this.err = undefined;
        this.state = ParallelQueryExecutionContextBase.STATES.started;
        this.routingProvider = new SmartRoutingMapProvider(this.clientContext);
        this.sortOrders = this.partitionedQueryExecutionInfo.queryInfo.orderBy;
        this.requestContinuation = options ? options.continuationToken || options.continuation : null;
        // response headers of undergoing operation
        this.respHeaders = getInitialHeader();
        // Make priority queue for documentProducers
        // The comparator is supplied by the derived class
        this.orderByPQ = new priorityqueuejs((a, b) => this.documentProducerComparator(b, a));
        // Creating the documentProducers
        this.sem = semaphore(1);
        // Creating callback for semaphore
        // TODO: Code smell
        const createDocumentProducersAndFillUpPriorityQueueFunc = () => __awaiter(this, void 0, void 0, function* () {
            // ensure the lock is released after finishing up
            try {
                const targetPartitionRanges = yield this._onTargetPartitionRanges();
                this.waitingForInternalExecutionContexts = targetPartitionRanges.length;
                const maxDegreeOfParallelism = options.maxDegreeOfParallelism === undefined || options.maxDegreeOfParallelism < 1
                    ? targetPartitionRanges.length
                    : Math.min(options.maxDegreeOfParallelism, targetPartitionRanges.length);
                log$1.info("Query starting against " +
                    targetPartitionRanges.length +
                    " ranges with parallelism of " +
                    maxDegreeOfParallelism);
                const parallelismSem = semaphore(maxDegreeOfParallelism);
                let filteredPartitionKeyRanges = [];
                // The document producers generated from filteredPartitionKeyRanges
                const targetPartitionQueryExecutionContextList = [];
                if (this.requestContinuation) {
                    throw new Error("Continuation tokens are not yet supported for cross partition queries");
                }
                else {
                    filteredPartitionKeyRanges = targetPartitionRanges;
                }
                // Create one documentProducer for each partitionTargetRange
                filteredPartitionKeyRanges.forEach((partitionTargetRange) => {
                    // TODO: any partitionTargetRange
                    // no async callback
                    targetPartitionQueryExecutionContextList.push(this._createTargetPartitionQueryExecutionContext(partitionTargetRange));
                });
                // Fill up our priority queue with documentProducers
                targetPartitionQueryExecutionContextList.forEach((documentProducer) => {
                    // has async callback
                    const throttledFunc = () => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const { result: document, headers } = yield documentProducer.current();
                            this._mergeWithActiveResponseHeaders(headers);
                            if (document === undefined) {
                                // no results on this one
                                return;
                            }
                            // if there are matching results in the target ex range add it to the priority queue
                            try {
                                this.orderByPQ.enq(documentProducer);
                            }
                            catch (e) {
                                this.err = e;
                            }
                        }
                        catch (err) {
                            this._mergeWithActiveResponseHeaders(err.headers);
                            this.err = err;
                        }
                        finally {
                            parallelismSem.leave();
                            this._decrementInitiationLock();
                        }
                    });
                    parallelismSem.take(throttledFunc);
                });
            }
            catch (err) {
                this.err = err;
                // release the lock
                this.sem.leave();
                return;
            }
        });
        this.sem.take(createDocumentProducersAndFillUpPriorityQueueFunc);
    }
    _decrementInitiationLock() {
        // decrements waitingForInternalExecutionContexts
        // if waitingForInternalExecutionContexts reaches 0 releases the semaphore and changes the state
        this.waitingForInternalExecutionContexts = this.waitingForInternalExecutionContexts - 1;
        if (this.waitingForInternalExecutionContexts === 0) {
            this.sem.leave();
            if (this.orderByPQ.size() === 0) {
                this.state = ParallelQueryExecutionContextBase.STATES.inProgress;
            }
        }
    }
    _mergeWithActiveResponseHeaders(headers) {
        mergeHeaders(this.respHeaders, headers);
    }
    _getAndResetActiveResponseHeaders() {
        const ret = this.respHeaders;
        this.respHeaders = getInitialHeader();
        return ret;
    }
    _onTargetPartitionRanges() {
        return __awaiter(this, void 0, void 0, function* () {
            // invokes the callback when the target partition ranges are ready
            const parsedRanges = this.partitionedQueryExecutionInfo.queryRanges;
            const queryRanges = parsedRanges.map((item) => QueryRange.parseFromDict(item));
            return this.routingProvider.getOverlappingRanges(this.collectionLink, queryRanges);
        });
    }
    /**
     * Gets the replacement ranges for a partitionkeyrange that has been split
     */
    _getReplacementPartitionKeyRanges(documentProducer) {
        return __awaiter(this, void 0, void 0, function* () {
            const partitionKeyRange = documentProducer.targetPartitionKeyRange;
            // Download the new routing map
            this.routingProvider = new SmartRoutingMapProvider(this.clientContext);
            // Get the queryRange that relates to this partitionKeyRange
            const queryRange = QueryRange.parsePartitionKeyRange(partitionKeyRange);
            return this.routingProvider.getOverlappingRanges(this.collectionLink, [queryRange]);
        });
    }
    // TODO: P0 Code smell - can barely tell what this is doing
    /**
     * Removes the current document producer from the priqueue,
     * replaces that document producer with child document producers,
     * then reexecutes the originFunction with the corrrected executionContext
     */
    _repairExecutionContext(originFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: any
            // Get the replacement ranges
            // Removing the invalid documentProducer from the orderByPQ
            const parentDocumentProducer = this.orderByPQ.deq();
            try {
                const replacementPartitionKeyRanges = yield this._getReplacementPartitionKeyRanges(parentDocumentProducer);
                const replacementDocumentProducers = [];
                // Create the replacement documentProducers
                replacementPartitionKeyRanges.forEach((partitionKeyRange) => {
                    // Create replacment document producers with the parent's continuationToken
                    const replacementDocumentProducer = this._createTargetPartitionQueryExecutionContext(partitionKeyRange, parentDocumentProducer.continuationToken);
                    replacementDocumentProducers.push(replacementDocumentProducer);
                });
                // We need to check if the documentProducers even has anything left to fetch from before enqueing them
                const checkAndEnqueueDocumentProducer = (documentProducerToCheck, checkNextDocumentProducerCallback) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const { result: afterItem } = yield documentProducerToCheck.current();
                        if (afterItem === undefined) {
                            // no more results left in this document producer, so we don't enqueue it
                        }
                        else {
                            // Safe to put document producer back in the queue
                            this.orderByPQ.enq(documentProducerToCheck);
                        }
                        yield checkNextDocumentProducerCallback();
                    }
                    catch (err) {
                        this.err = err;
                        return;
                    }
                });
                const checkAndEnqueueDocumentProducers = (rdp) => __awaiter(this, void 0, void 0, function* () {
                    if (rdp.length > 0) {
                        // We still have a replacementDocumentProducer to check
                        const replacementDocumentProducer = rdp.shift();
                        yield checkAndEnqueueDocumentProducer(replacementDocumentProducer, () => __awaiter(this, void 0, void 0, function* () {
                            yield checkAndEnqueueDocumentProducers(rdp);
                        }));
                    }
                    else {
                        // reexecutes the originFunction with the corrrected executionContext
                        return originFunction();
                    }
                });
                // Invoke the recursive function to get the ball rolling
                yield checkAndEnqueueDocumentProducers(replacementDocumentProducers);
            }
            catch (err) {
                this.err = err;
                throw err;
            }
        });
    }
    static _needPartitionKeyRangeCacheRefresh(error) {
        // TODO: any error
        return (error.code === StatusCodes.Gone &&
            "substatus" in error &&
            error["substatus"] === SubStatusCodes.PartitionKeyRangeGone);
    }
    /**
     * Checks to see if the executionContext needs to be repaired.
     * if so it repairs the execution context and executes the ifCallback,
     * else it continues with the current execution context and executes the elseCallback
     */
    _repairExecutionContextIfNeeded(ifCallback, elseCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentProducer = this.orderByPQ.peek();
            // Check if split happened
            try {
                yield documentProducer.current();
                elseCallback();
            }
            catch (err) {
                if (ParallelQueryExecutionContextBase._needPartitionKeyRangeCacheRefresh(err)) {
                    // Split has happened so we need to repair execution context before continueing
                    return this._repairExecutionContext(ifCallback);
                }
                else {
                    // Something actually bad happened ...
                    this.err = err;
                    throw err;
                }
            }
        });
    }
    /**
     * Fetches the next element in the ParallelQueryExecutionContextBase.
     */
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.err) {
                // if there is a prior error return error
                throw this.err;
            }
            return new Promise((resolve, reject) => {
                this.sem.take(() => {
                    // NOTE: lock must be released before invoking quitting
                    if (this.err) {
                        // release the lock before invoking callback
                        this.sem.leave();
                        // if there is a prior error return error
                        this.err.headers = this._getAndResetActiveResponseHeaders();
                        reject(this.err);
                        return;
                    }
                    if (this.orderByPQ.size() === 0) {
                        // there is no more results
                        this.state = ParallelQueryExecutionContextBase.STATES.ended;
                        // release the lock before invoking callback
                        this.sem.leave();
                        return resolve({
                            result: undefined,
                            headers: this._getAndResetActiveResponseHeaders()
                        });
                    }
                    const ifCallback = () => {
                        // Release the semaphore to avoid deadlock
                        this.sem.leave();
                        // Reexcute the function
                        return resolve(this.nextItem());
                    };
                    const elseCallback = () => __awaiter(this, void 0, void 0, function* () {
                        let documentProducer;
                        try {
                            documentProducer = this.orderByPQ.deq();
                        }
                        catch (e) {
                            // if comparing elements of the priority queue throws exception
                            // set that error and return error
                            this.err = e;
                            // release the lock before invoking callback
                            this.sem.leave();
                            this.err.headers = this._getAndResetActiveResponseHeaders();
                            reject(this.err);
                            return;
                        }
                        let item;
                        let headers;
                        try {
                            const response = yield documentProducer.nextItem();
                            item = response.result;
                            headers = response.headers;
                            this._mergeWithActiveResponseHeaders(headers);
                            if (item === undefined) {
                                // this should never happen
                                // because the documentProducer already has buffered an item
                                // assert item !== undefined
                                this.err = new Error(`Extracted DocumentProducer from the priority queue \
                                            doesn't have any buffered item!`);
                                // release the lock before invoking callback
                                this.sem.leave();
                                return resolve({
                                    result: undefined,
                                    headers: this._getAndResetActiveResponseHeaders()
                                });
                            }
                        }
                        catch (err) {
                            this.err = new Error(`Extracted DocumentProducer from the priority queue fails to get the \
                                    buffered item. Due to ${JSON.stringify(err)}`);
                            this.err.headers = this._getAndResetActiveResponseHeaders();
                            // release the lock before invoking callback
                            this.sem.leave();
                            reject(this.err);
                            return;
                        }
                        // we need to put back the document producer to the queue if it has more elements.
                        // the lock will be released after we know document producer must be put back in the queue or not
                        try {
                            const { result: afterItem, headers: otherHeaders } = yield documentProducer.current();
                            this._mergeWithActiveResponseHeaders(otherHeaders);
                            if (afterItem === undefined) {
                                // no more results is left in this document producer
                            }
                            else {
                                try {
                                    const headItem = documentProducer.fetchResults[0];
                                    if (typeof headItem === "undefined") {
                                        throw new Error("Extracted DocumentProducer from PQ is invalid state with no result!");
                                    }
                                    this.orderByPQ.enq(documentProducer);
                                }
                                catch (e) {
                                    // if comparing elements in priority queue throws exception
                                    // set error
                                    this.err = e;
                                }
                            }
                        }
                        catch (err) {
                            if (ParallelQueryExecutionContextBase._needPartitionKeyRangeCacheRefresh(err)) {
                                // We want the document producer enqueued
                                // So that later parts of the code can repair the execution context
                                this.orderByPQ.enq(documentProducer);
                            }
                            else {
                                // Something actually bad happened
                                this.err = err;
                                reject(this.err);
                            }
                        }
                        finally {
                            // release the lock before returning
                            this.sem.leave();
                        }
                        // invoke the callback on the item
                        return resolve({
                            result: item,
                            headers: this._getAndResetActiveResponseHeaders()
                        });
                    });
                    this._repairExecutionContextIfNeeded(ifCallback, elseCallback).catch(reject);
                });
            });
        });
    }
    /**
     * Determine if there are still remaining resources to processs based on the value of the continuation
     * token or the elements remaining on the current batch in the QueryIterator.
     * @returns true if there is other elements to process in the ParallelQueryExecutionContextBase.
     */
    hasMoreResults() {
        return !(this.state === ParallelQueryExecutionContextBase.STATES.ended || this.err !== undefined);
    }
    /**
     * Creates document producers
     */
    _createTargetPartitionQueryExecutionContext(partitionKeyTargetRange, continuationToken) {
        // TODO: any
        // creates target partition range Query Execution Context
        let rewrittenQuery = this.partitionedQueryExecutionInfo.queryInfo.rewrittenQuery;
        let sqlQuerySpec;
        const query = this.query;
        if (typeof query === "string") {
            sqlQuerySpec = { query };
        }
        else {
            sqlQuerySpec = query;
        }
        const formatPlaceHolder = "{documentdb-formattableorderbyquery-filter}";
        if (rewrittenQuery) {
            sqlQuerySpec = JSON.parse(JSON.stringify(sqlQuerySpec));
            // We hardcode the formattable filter to true for now
            rewrittenQuery = rewrittenQuery.replace(formatPlaceHolder, "true");
            sqlQuerySpec["query"] = rewrittenQuery;
        }
        const options = JSON.parse(JSON.stringify(this.options));
        options.continuationToken = continuationToken;
        return new DocumentProducer(this.clientContext, this.collectionLink, sqlQuerySpec, partitionKeyTargetRange, options);
    }
}
ParallelQueryExecutionContextBase.STATES = ParallelQueryExecutionContextBaseStates;

// Copyright (c) Microsoft Corporation.
/**
 * Provides the ParallelQueryExecutionContext.
 * This class is capable of handling parallelized queries and derives from ParallelQueryExecutionContextBase.
 * @hidden
 */
class ParallelQueryExecutionContext extends ParallelQueryExecutionContextBase {
    // Instance members are inherited
    // Overriding documentProducerComparator for ParallelQueryExecutionContexts
    /**
     * Provides a Comparator for document producers using the min value of the corresponding target partition.
     * @returns Comparator Function
     * @hidden
     */
    documentProducerComparator(docProd1, docProd2) {
        return docProd1.generation - docProd2.generation;
    }
}

/** @hidden */
class OrderByQueryExecutionContext extends ParallelQueryExecutionContextBase {
    /**
     * Provides the OrderByQueryExecutionContext.
     * This class is capable of handling orderby queries and dervives from ParallelQueryExecutionContextBase.
     *
     * When handling a parallelized query, it instantiates one instance of
     * DocumentProcuder per target partition key range and aggregates the result of each.
     *
     * @param clientContext - The service endpoint to use to create the client.
     * @param collectionLink - The Collection Link
     * @param options - Represents the feed options.
     * @param partitionedQueryExecutionInfo - PartitionedQueryExecutionInfo
     * @hidden
     */
    constructor(clientContext, collectionLink, query, options, partitionedQueryExecutionInfo) {
        // Calling on base class constructor
        super(clientContext, collectionLink, query, options, partitionedQueryExecutionInfo);
        this.orderByComparator = new OrderByDocumentProducerComparator(this.sortOrders);
    }
    // Instance members are inherited
    // Overriding documentProducerComparator for OrderByQueryExecutionContexts
    /**
     * Provides a Comparator for document producers which respects orderby sort order.
     * @returns Comparator Function
     * @hidden
     */
    documentProducerComparator(docProd1, docProd2) {
        return this.orderByComparator.compare(docProd1, docProd2);
    }
}

/** @hidden */
class OffsetLimitEndpointComponent {
    constructor(executionContext, offset, limit) {
        this.executionContext = executionContext;
        this.offset = offset;
        this.limit = limit;
    }
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            const aggregateHeaders = getInitialHeader();
            while (this.offset > 0) {
                // Grab next item but ignore the result. We only need the headers
                const { headers } = yield this.executionContext.nextItem();
                this.offset--;
                mergeHeaders(aggregateHeaders, headers);
            }
            if (this.limit > 0) {
                const { result, headers } = yield this.executionContext.nextItem();
                this.limit--;
                mergeHeaders(aggregateHeaders, headers);
                return { result, headers: aggregateHeaders };
            }
            // If both limit and offset are 0, return nothing
            return { result: undefined, headers: getInitialHeader() };
        });
    }
    hasMoreResults() {
        return (this.offset > 0 || this.limit > 0) && this.executionContext.hasMoreResults();
    }
}

/** @hidden */
class OrderByEndpointComponent {
    /**
     * Represents an endpoint in handling an order by query. For each processed orderby
     * result it returns 'payload' item of the result
     *
     * @param executionContext - Underlying Execution Context
     * @hidden
     */
    constructor(executionContext) {
        this.executionContext = executionContext;
    }
    /**
     * Execute a provided function on the next element in the OrderByEndpointComponent.
     */
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            const { result: item, headers } = yield this.executionContext.nextItem();
            return {
                result: item !== undefined ? item.payload : undefined,
                headers
            };
        });
    }
    /**
     * Determine if there are still remaining resources to processs.
     * @returns true if there is other elements to process in the OrderByEndpointComponent.
     */
    hasMoreResults() {
        return this.executionContext.hasMoreResults();
    }
}

// Copyright (c) Microsoft Corporation.
function digest(str) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = encodeUTF8(str);
        const hash = yield globalCrypto.subtle.digest("SHA-256", data);
        return bufferToHex(hash);
    });
}
function bufferToHex(buffer) {
    return Array.prototype.map
        .call(new Uint8Array(buffer), (item) => ("00" + item.toString(16)).slice(-2))
        .join("");
}

var fastJsonStableStringify = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};

// Copyright (c) Microsoft Corporation.
function hashObject(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const stringifiedObject = fastJsonStableStringify(object);
        return digest(stringifiedObject);
    });
}

/** @hidden */
class OrderedDistinctEndpointComponent {
    constructor(executionContext) {
        this.executionContext = executionContext;
    }
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            const { headers, result } = yield this.executionContext.nextItem();
            if (result) {
                const hashedResult = yield hashObject(result);
                if (hashedResult === this.hashedLastResult) {
                    return { result: undefined, headers };
                }
                this.hashedLastResult = hashedResult;
            }
            return { result, headers };
        });
    }
    hasMoreResults() {
        return this.executionContext.hasMoreResults();
    }
}

/** @hidden */
class UnorderedDistinctEndpointComponent {
    constructor(executionContext) {
        this.executionContext = executionContext;
        this.hashedResults = new Set();
    }
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            const { headers, result } = yield this.executionContext.nextItem();
            if (result) {
                const hashedResult = yield hashObject(result);
                if (this.hashedResults.has(hashedResult)) {
                    return { result: undefined, headers };
                }
                this.hashedResults.add(hashedResult);
            }
            return { result, headers };
        });
    }
    hasMoreResults() {
        return this.executionContext.hasMoreResults();
    }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// All aggregates are effectively a group by operation
// The empty group is used for aggregates without a GROUP BY clause
const emptyGroup = "__empty__";
// Newer API versions rewrite the query to return `item2`. It fixes some legacy issues with the original `item` result
// Aggregator code should use item2 when available
const extractAggregateResult = (payload) => Object.keys(payload).length > 0 ? (payload.item2 ? payload.item2 : payload.item) : null;

/** @hidden */
class GroupByEndpointComponent {
    constructor(executionContext, queryInfo) {
        this.executionContext = executionContext;
        this.queryInfo = queryInfo;
        this.groupings = new Map();
        this.aggregateResultArray = [];
        this.completed = false;
    }
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            // If we have a full result set, begin returning results
            if (this.aggregateResultArray.length > 0) {
                return { result: this.aggregateResultArray.pop(), headers: getInitialHeader() };
            }
            if (this.completed) {
                return { result: undefined, headers: getInitialHeader() };
            }
            const aggregateHeaders = getInitialHeader();
            while (this.executionContext.hasMoreResults()) {
                // Grab the next result
                const { result, headers } = (yield this.executionContext.nextItem());
                mergeHeaders(aggregateHeaders, headers);
                // If it exists, process it via aggregators
                if (result) {
                    const group = result.groupByItems ? yield hashObject(result.groupByItems) : emptyGroup;
                    const aggregators = this.groupings.get(group);
                    const payload = result.payload;
                    if (aggregators) {
                        // Iterator over all results in the payload
                        Object.keys(payload).map((key) => {
                            const aggregateResult = extractAggregateResult(payload[key]);
                            aggregators.get(key).aggregate(aggregateResult);
                        });
                    }
                    else {
                        // This is the first time we have seen a grouping. Setup the initial result without aggregate values
                        const grouping = new Map();
                        this.groupings.set(group, grouping);
                        // Iterator over all results in the payload
                        Object.keys(payload).map((key) => {
                            const aggregateType = this.queryInfo.groupByAliasToAggregateType[key];
                            // Create a new aggregator for this specific aggregate field
                            const aggregator = createAggregator(aggregateType);
                            grouping.set(key, aggregator);
                            if (aggregateType) {
                                const aggregateResult = extractAggregateResult(payload[key]);
                                aggregator.aggregate(aggregateResult);
                            }
                            else {
                                aggregator.aggregate(payload[key]);
                            }
                        });
                    }
                }
            }
            for (const grouping of this.groupings.values()) {
                const groupResult = {};
                for (const [aggregateKey, aggregator] of grouping.entries()) {
                    groupResult[aggregateKey] = aggregator.getResult();
                }
                this.aggregateResultArray.push(groupResult);
            }
            this.completed = true;
            return { result: this.aggregateResultArray.pop(), headers: aggregateHeaders };
        });
    }
    hasMoreResults() {
        return this.executionContext.hasMoreResults() || this.aggregateResultArray.length > 0;
    }
}

/** @hidden */
class GroupByValueEndpointComponent {
    constructor(executionContext, queryInfo) {
        this.executionContext = executionContext;
        this.queryInfo = queryInfo;
        this.aggregators = new Map();
        this.aggregateResultArray = [];
        this.completed = false;
        // VALUE queries will only every have a single grouping
        this.aggregateType = this.queryInfo.aggregates[0];
    }
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            // Start returning results if we have processed a full results set
            if (this.aggregateResultArray.length > 0) {
                return { result: this.aggregateResultArray.pop(), headers: getInitialHeader() };
            }
            if (this.completed) {
                return { result: undefined, headers: getInitialHeader() };
            }
            const aggregateHeaders = getInitialHeader();
            while (this.executionContext.hasMoreResults()) {
                // Grab the next result
                const { result, headers } = (yield this.executionContext.nextItem());
                mergeHeaders(aggregateHeaders, headers);
                // If it exists, process it via aggregators
                if (result) {
                    let grouping = emptyGroup;
                    let payload = result;
                    if (result.groupByItems) {
                        // If the query contains a GROUP BY clause, it will have a payload property and groupByItems
                        payload = result.payload;
                        grouping = yield hashObject(result.groupByItems);
                    }
                    const aggregator = this.aggregators.get(grouping);
                    if (!aggregator) {
                        // This is the first time we have seen a grouping so create a new aggregator
                        this.aggregators.set(grouping, createAggregator(this.aggregateType));
                    }
                    if (this.aggregateType) {
                        const aggregateResult = extractAggregateResult(payload[0]);
                        // if aggregate result is null, we need to short circuit aggregation and return undefined
                        if (aggregateResult === null) {
                            this.completed = true;
                        }
                        this.aggregators.get(grouping).aggregate(aggregateResult);
                    }
                    else {
                        // Queries with no aggregates pass the payload directly to the aggregator
                        // Example: SELECT VALUE c.team FROM c GROUP BY c.team
                        this.aggregators.get(grouping).aggregate(payload);
                    }
                }
            }
            // We bail early since we got an undefined result back `[{}]`
            if (this.completed) {
                return { result: undefined, headers: aggregateHeaders };
            }
            // If no results are left in the underlying execution context, convert our aggregate results to an array
            for (const aggregator of this.aggregators.values()) {
                this.aggregateResultArray.push(aggregator.getResult());
            }
            this.completed = true;
            return { result: this.aggregateResultArray.pop(), headers: aggregateHeaders };
        });
    }
    hasMoreResults() {
        return this.executionContext.hasMoreResults() || this.aggregateResultArray.length > 0;
    }
}

/** @hidden */
class PipelinedQueryExecutionContext {
    constructor(clientContext, collectionLink, query, options, partitionedQueryExecutionInfo) {
        this.clientContext = clientContext;
        this.collectionLink = collectionLink;
        this.query = query;
        this.options = options;
        this.partitionedQueryExecutionInfo = partitionedQueryExecutionInfo;
        this.endpoint = null;
        this.pageSize = options["maxItemCount"];
        if (this.pageSize === undefined) {
            this.pageSize = PipelinedQueryExecutionContext.DEFAULT_PAGE_SIZE;
        }
        // Pick between parallel vs order by execution context
        const sortOrders = partitionedQueryExecutionInfo.queryInfo.orderBy;
        if (Array.isArray(sortOrders) && sortOrders.length > 0) {
            // Need to wrap orderby execution context in endpoint component, since the data is nested as a \
            //      "payload" property.
            this.endpoint = new OrderByEndpointComponent(new OrderByQueryExecutionContext(this.clientContext, this.collectionLink, this.query, this.options, this.partitionedQueryExecutionInfo));
        }
        else {
            this.endpoint = new ParallelQueryExecutionContext(this.clientContext, this.collectionLink, this.query, this.options, this.partitionedQueryExecutionInfo);
        }
        if (Object.keys(partitionedQueryExecutionInfo.queryInfo.groupByAliasToAggregateType).length > 0 ||
            partitionedQueryExecutionInfo.queryInfo.aggregates.length > 0 ||
            partitionedQueryExecutionInfo.queryInfo.groupByExpressions.length > 0) {
            if (partitionedQueryExecutionInfo.queryInfo.hasSelectValue) {
                this.endpoint = new GroupByValueEndpointComponent(this.endpoint, partitionedQueryExecutionInfo.queryInfo);
            }
            else {
                this.endpoint = new GroupByEndpointComponent(this.endpoint, partitionedQueryExecutionInfo.queryInfo);
            }
        }
        // If top then add that to the pipeline. TOP N is effectively OFFSET 0 LIMIT N
        const top = partitionedQueryExecutionInfo.queryInfo.top;
        if (typeof top === "number") {
            this.endpoint = new OffsetLimitEndpointComponent(this.endpoint, 0, top);
        }
        // If offset+limit then add that to the pipeline
        const limit = partitionedQueryExecutionInfo.queryInfo.limit;
        const offset = partitionedQueryExecutionInfo.queryInfo.offset;
        if (typeof limit === "number" && typeof offset === "number") {
            this.endpoint = new OffsetLimitEndpointComponent(this.endpoint, offset, limit);
        }
        // If distinct then add that to the pipeline
        const distinctType = partitionedQueryExecutionInfo.queryInfo.distinctType;
        if (distinctType === "Ordered") {
            this.endpoint = new OrderedDistinctEndpointComponent(this.endpoint);
        }
        if (distinctType === "Unordered") {
            this.endpoint = new UnorderedDistinctEndpointComponent(this.endpoint);
        }
    }
    nextItem() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.endpoint.nextItem();
        });
    }
    // Removed callback here beacuse it wouldn't have ever worked...
    hasMoreResults() {
        return this.endpoint.hasMoreResults();
    }
    fetchMore() {
        return __awaiter(this, void 0, void 0, function* () {
            // if the wrapped endpoint has different implementation for fetchMore use that
            // otherwise use the default implementation
            if (typeof this.endpoint.fetchMore === "function") {
                return this.endpoint.fetchMore();
            }
            else {
                this.fetchBuffer = [];
                this.fetchMoreRespHeaders = getInitialHeader();
                return this._fetchMoreImplementation();
            }
        });
    }
    _fetchMoreImplementation() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { result: item, headers } = yield this.endpoint.nextItem();
                mergeHeaders(this.fetchMoreRespHeaders, headers);
                if (item === undefined) {
                    // no more results
                    if (this.fetchBuffer.length === 0) {
                        return {
                            result: undefined,
                            headers: this.fetchMoreRespHeaders
                        };
                    }
                    else {
                        // Just give what we have
                        const temp = this.fetchBuffer;
                        this.fetchBuffer = [];
                        return { result: temp, headers: this.fetchMoreRespHeaders };
                    }
                }
                else {
                    // append the result
                    this.fetchBuffer.push(item);
                    if (this.fetchBuffer.length >= this.pageSize) {
                        // fetched enough results
                        const temp = this.fetchBuffer.slice(0, this.pageSize);
                        this.fetchBuffer = this.fetchBuffer.splice(this.pageSize);
                        return { result: temp, headers: this.fetchMoreRespHeaders };
                    }
                    else {
                        // recursively fetch more
                        // TODO: is recursion a good idea?
                        return this._fetchMoreImplementation();
                    }
                }
            }
            catch (err) {
                mergeHeaders(this.fetchMoreRespHeaders, err.headers);
                err.headers = this.fetchMoreRespHeaders;
                if (err) {
                    throw err;
                }
            }
        });
    }
}
PipelinedQueryExecutionContext.DEFAULT_PAGE_SIZE = 10;

// Copyright (c) Microsoft Corporation.
/**
 * Represents a QueryIterator Object, an implementation of feed or query response that enables
 * traversal and iterating over the response
 * in the Azure Cosmos DB database service.
 */
class QueryIterator {
    /**
     * @hidden
     */
    constructor(clientContext, query, options, fetchFunctions, resourceLink, resourceType) {
        this.clientContext = clientContext;
        this.query = query;
        this.options = options;
        this.fetchFunctions = fetchFunctions;
        this.resourceLink = resourceLink;
        this.resourceType = resourceType;
        this.query = query;
        this.fetchFunctions = fetchFunctions;
        this.options = options || {};
        this.resourceLink = resourceLink;
        this.fetchAllLastResHeaders = getInitialHeader();
        this.reset();
        this.isInitialized = false;
    }
    /**
     * Gets an async iterator that will yield results until completion.
     *
     * NOTE: AsyncIterators are a very new feature and you might need to
     * use polyfils/etc. in order to use them in your code.
     *
     * If you're using TypeScript, you can use the following polyfill as long
     * as you target ES6 or higher and are running on Node 6 or higher.
     *
     * ```typescript
     * if (!Symbol || !Symbol.asyncIterator) {
     *   (Symbol as any).asyncIterator = Symbol.for("Symbol.asyncIterator");
     * }
     * ```
     *
     * @example Iterate over all databases
     * ```typescript
     * for await(const {result: db} in client.databases.readAll().getAsyncIterator()) {
     *   console.log(`Got ${db.id} from AsyncIterator`);
     * }
     * ```
     */
    getAsyncIterator() {
        return __asyncGenerator(this, arguments, function* getAsyncIterator_1() {
            this.reset();
            this.queryPlanPromise = this.fetchQueryPlan();
            while (this.queryExecutionContext.hasMoreResults()) {
                let response;
                try {
                    response = yield __await(this.queryExecutionContext.fetchMore());
                }
                catch (error) {
                    if (this.needsQueryPlan(error)) {
                        yield __await(this.createPipelinedExecutionContext());
                        try {
                            response = yield __await(this.queryExecutionContext.fetchMore());
                        }
                        catch (queryError) {
                            this.handleSplitError(queryError);
                        }
                    }
                    else {
                        throw error;
                    }
                }
                const feedResponse = new FeedResponse(response.result, response.headers, this.queryExecutionContext.hasMoreResults());
                if (response.result !== undefined) {
                    yield yield __await(feedResponse);
                }
            }
        });
    }
    /**
     * Determine if there are still remaining resources to processs based on the value of the continuation token or the
     * elements remaining on the current batch in the QueryIterator.
     * @returns true if there is other elements to process in the QueryIterator.
     */
    hasMoreResults() {
        return this.queryExecutionContext.hasMoreResults();
    }
    /**
     * Fetch all pages for the query and return a single FeedResponse.
     */
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.reset();
            this.fetchAllTempResources = [];
            let response;
            try {
                response = yield this.toArrayImplementation();
            }
            catch (error) {
                this.handleSplitError(error);
            }
            return response;
        });
    }
    /**
     * Retrieve the next batch from the feed.
     *
     * This may or may not fetch more pages from the backend depending on your settings
     * and the type of query. Aggregate queries will generally fetch all backend pages
     * before returning the first batch of responses.
     */
    fetchNext() {
        return __awaiter(this, void 0, void 0, function* () {
            this.queryPlanPromise = this.fetchQueryPlan();
            if (!this.isInitialized) {
                yield this.init();
            }
            let response;
            try {
                response = yield this.queryExecutionContext.fetchMore();
            }
            catch (error) {
                if (this.needsQueryPlan(error)) {
                    yield this.createPipelinedExecutionContext();
                    try {
                        response = yield this.queryExecutionContext.fetchMore();
                    }
                    catch (queryError) {
                        this.handleSplitError(queryError);
                    }
                }
                else {
                    throw error;
                }
            }
            return new FeedResponse(response.result, response.headers, this.queryExecutionContext.hasMoreResults());
        });
    }
    /**
     * Reset the QueryIterator to the beginning and clear all the resources inside it
     */
    reset() {
        this.queryPlanPromise = undefined;
        this.queryExecutionContext = new DefaultQueryExecutionContext(this.options, this.fetchFunctions);
    }
    toArrayImplementation() {
        return __awaiter(this, void 0, void 0, function* () {
            this.queryPlanPromise = this.fetchQueryPlan();
            if (!this.isInitialized) {
                yield this.init();
            }
            while (this.queryExecutionContext.hasMoreResults()) {
                let response;
                try {
                    response = yield this.queryExecutionContext.nextItem();
                }
                catch (error) {
                    if (this.needsQueryPlan(error)) {
                        yield this.createPipelinedExecutionContext();
                        response = yield this.queryExecutionContext.nextItem();
                    }
                    else {
                        throw error;
                    }
                }
                const { result, headers } = response;
                // concatenate the results and fetch more
                mergeHeaders(this.fetchAllLastResHeaders, headers);
                if (result !== undefined) {
                    this.fetchAllTempResources.push(result);
                }
            }
            return new FeedResponse(this.fetchAllTempResources, this.fetchAllLastResHeaders, this.queryExecutionContext.hasMoreResults());
        });
    }
    createPipelinedExecutionContext() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryPlanResponse = yield this.queryPlanPromise;
            // We always coerce queryPlanPromise to resolved. So if it errored, we need to manually inspect the resolved value
            if (queryPlanResponse instanceof Error) {
                throw queryPlanResponse;
            }
            const queryPlan = queryPlanResponse.result;
            const queryInfo = queryPlan.queryInfo;
            if (queryInfo.aggregates.length > 0 && queryInfo.hasSelectValue === false) {
                throw new Error("Aggregate queries must use the VALUE keyword");
            }
            this.queryExecutionContext = new PipelinedQueryExecutionContext(this.clientContext, this.resourceLink, this.query, this.options, queryPlan);
        });
    }
    fetchQueryPlan() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.queryPlanPromise && this.resourceType === ResourceType.item) {
                return this.clientContext
                    .getQueryPlan(getPathFromLink(this.resourceLink) + "/docs", ResourceType.item, this.resourceLink, this.query, this.options)
                    .catch((error) => error); // Without this catch, node reports an unhandled rejection. So we stash the promise as resolved even if it errored.
            }
            return this.queryPlanPromise;
        });
    }
    needsQueryPlan(error) {
        var _a;
        if (((_a = error.body) === null || _a === void 0 ? void 0 : _a.additionalErrorInfo) ||
            error.message.includes("Cross partition query only supports")) {
            return error.code === StatusCodes.BadRequest && this.resourceType === ResourceType.item;
        }
        else {
            throw error;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInitialized === true) {
                return;
            }
            if (this.initPromise === undefined) {
                this.initPromise = this._init();
            }
            return this.initPromise;
        });
    }
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.options.forceQueryPlan === true && this.resourceType === ResourceType.item) {
                yield this.createPipelinedExecutionContext();
            }
            this.isInitialized = true;
        });
    }
    handleSplitError(err) {
        if (err.code === 410) {
            const error = new Error("Encountered partition split and could not recover. This request is retryable");
            error.code = 503;
            error.originalError = err;
            throw error;
        }
        else {
            throw err;
        }
    }
}

class ConflictResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, conflict) {
        super(resource, headers, statusCode);
        this.conflict = conflict;
    }
}

/**
 * Use to read or delete a given {@link Conflict} by id.
 *
 * @see {@link Conflicts} to query or read all conflicts.
 */
class Conflict {
    /**
     * @hidden
     * @param container - The parent {@link Container}.
     * @param id - The id of the given {@link Conflict}.
     */
    constructor(container, id, clientContext) {
        this.container = container;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return `/${this.container.url}/${Constants.Path.ConflictsPathSegment}/${this.id}`;
    }
    /**
     * Read the {@link ConflictDefinition} for the given {@link Conflict}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url, ResourceType.conflicts);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                options
            });
            return new ConflictResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Delete the given {@link ConflictDefinition}.
     */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.conflicts,
                resourceId: id,
                options
            });
            return new ConflictResponse(response.result, response.headers, response.code, this);
        });
    }
}

/**
 * Use to query or read all conflicts.
 *
 * @see {@link Conflict} to read or delete a given {@link Conflict} by id.
 */
class Conflicts {
    constructor(container, clientContext) {
        this.container = container;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.container.url, ResourceType.conflicts);
        const id = getIdFromLink(this.container.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.conflicts,
                resourceId: id,
                resultFn: (result) => result.Conflicts,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Reads all conflicts
     * @param options - Use to set options like response page size, continuation tokens, etc.
     */
    readAll(options) {
        return this.query(undefined, options);
    }
}

class ItemResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, subsstatusCode, item) {
        super(resource, headers, statusCode, subsstatusCode);
        this.item = item;
    }
}

/**
 * Used to perform operations on a specific item.
 *
 * @see {@link Items} for operations on all items; see `container.items`.
 */
class Item {
    /**
     * @hidden
     * @param container - The parent {@link Container}.
     * @param id - The id of the given {@link Item}.
     * @param partitionKey - The primary key of the given {@link Item} (only for partitioned containers).
     */
    constructor(container, id, partitionKey, clientContext) {
        this.container = container;
        this.id = id;
        this.clientContext = clientContext;
        this.partitionKey = partitionKey;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createDocumentUri(this.container.database.id, this.container.id, this.id);
    }
    /**
     * Read the item's definition.
     *
     * Any provided type, T, is not necessarily enforced by the SDK.
     * You may get more or less properties and it's up to your logic to enforce it.
     * If the type, T, is a class, it won't pass `typeof` comparisons, because it won't have a match prototype.
     * It's recommended to only use interfaces.
     *
     * There is no set schema for JSON items. They may contain any number of custom properties.
     *
     * @param options - Additional options for the request
     *
     * @example Using custom type for response
     * ```typescript
     * interface TodoItem {
     *   title: string;
     *   done: bool;
     *   id: string;
     * }
     *
     * let item: TodoItem;
     * ({body: item} = await item.read<TodoItem>());
     * ```
     */
    read(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.partitionKey === undefined) {
                const { resource: partitionKeyDefinition } = yield this.container.readPartitionKeyDefinition();
                this.partitionKey = undefinedPartitionKey(partitionKeyDefinition);
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            let response;
            try {
                response = yield this.clientContext.read({
                    path,
                    resourceType: ResourceType.item,
                    resourceId: id,
                    options,
                    partitionKey: this.partitionKey
                });
            }
            catch (error) {
                if (error.code !== StatusCodes.NotFound) {
                    throw error;
                }
                response = error;
            }
            return new ItemResponse(response.result, response.headers, response.code, response.substatus, this);
        });
    }
    replace(body, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.partitionKey === undefined) {
                const { resource: partitionKeyDefinition } = yield this.container.readPartitionKeyDefinition();
                this.partitionKey = extractPartitionKey(body, partitionKeyDefinition);
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.item,
                resourceId: id,
                options,
                partitionKey: this.partitionKey
            });
            return new ItemResponse(response.result, response.headers, response.code, response.substatus, this);
        });
    }
    /**
     * Delete the item.
     *
     * Any provided type, T, is not necessarily enforced by the SDK.
     * You may get more or less properties and it's up to your logic to enforce it.
     *
     * @param options - Additional options for the request
     */
    delete(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.partitionKey === undefined) {
                const { resource: partitionKeyDefinition } = yield this.container.readPartitionKeyDefinition();
                this.partitionKey = undefinedPartitionKey(partitionKeyDefinition);
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.item,
                resourceId: id,
                options,
                partitionKey: this.partitionKey
            });
            return new ItemResponse(response.result, response.headers, response.code, response.substatus, this);
        });
    }
}

// Copyright (c) Microsoft Corporation.
/**
 * A single response page from the Azure Cosmos DB Change Feed
 */
class ChangeFeedResponse {
    /**
     * @internal
     */
    constructor(
    /**
     * Gets the items returned in the response from Azure Cosmos DB
     */
    result, 
    /**
     * Gets the number of items returned in the response from Azure Cosmos DB
     */
    count, 
    /**
     * Gets the status code of the response from Azure Cosmos DB
     */
    statusCode, headers) {
        this.result = result;
        this.count = count;
        this.statusCode = statusCode;
        this.headers = Object.freeze(headers);
    }
    /**
     * Gets the request charge for this request from the Azure Cosmos DB service.
     */
    get requestCharge() {
        const rus = this.headers[Constants.HttpHeaders.RequestCharge];
        return rus ? parseInt(rus, 10) : null;
    }
    /**
     * Gets the activity ID for the request from the Azure Cosmos DB service.
     */
    get activityId() {
        return this.headers[Constants.HttpHeaders.ActivityId];
    }
    /**
     * Gets the continuation token to be used for continuing enumeration of the Azure Cosmos DB service.
     *
     * This is equivalent to the `etag` property.
     */
    get continuation() {
        return this.etag;
    }
    /**
     * Gets the session token for use in session consistency reads from the Azure Cosmos DB service.
     */
    get sessionToken() {
        return this.headers[Constants.HttpHeaders.SessionToken];
    }
    /**
     * Gets the entity tag associated with last transaction in the Azure Cosmos DB service,
     * which can be used as If-Non-Match Access condition for ReadFeed REST request or
     * `continuation` property of `ChangeFeedOptions` parameter for
     * `Items.changeFeed()`
     * to get feed changes since the transaction specified by this entity tag.
     *
     * This is equivalent to the `continuation` property.
     */
    get etag() {
        return this.headers[Constants.HttpHeaders.ETag];
    }
}

/**
 * Provides iterator for change feed.
 *
 * Use `Items.changeFeed()` to get an instance of the iterator.
 */
class ChangeFeedIterator {
    /**
     * @internal
     */
    constructor(clientContext, resourceId, resourceLink, partitionKey, changeFeedOptions) {
        this.clientContext = clientContext;
        this.resourceId = resourceId;
        this.resourceLink = resourceLink;
        this.partitionKey = partitionKey;
        this.changeFeedOptions = changeFeedOptions;
        // partition key XOR partition key range id
        const partitionKeyValid = partitionKey !== undefined;
        this.isPartitionSpecified = partitionKeyValid;
        let canUseStartFromBeginning = true;
        if (changeFeedOptions.continuation) {
            this.nextIfNoneMatch = changeFeedOptions.continuation;
            canUseStartFromBeginning = false;
        }
        if (changeFeedOptions.startTime) {
            // .toUTCString() is platform specific, but most platforms use RFC 1123.
            // In ECMAScript 2018, this was standardized to RFC 1123.
            // See for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
            this.ifModifiedSince = changeFeedOptions.startTime.toUTCString();
            canUseStartFromBeginning = false;
        }
        if (canUseStartFromBeginning && !changeFeedOptions.startFromBeginning) {
            this.nextIfNoneMatch = ChangeFeedIterator.IfNoneMatchAllHeaderValue;
        }
    }
    /**
     * Gets a value indicating whether there are potentially additional results that can be retrieved.
     *
     * Initially returns true. This value is set based on whether the last execution returned a continuation token.
     *
     * @returns Boolean value representing if whether there are potentially additional results that can be retrieved.
     */
    get hasMoreResults() {
        return this.lastStatusCode !== StatusCodes.NotModified;
    }
    /**
     * Gets an async iterator which will yield pages of results from Azure Cosmos DB.
     */
    getAsyncIterator() {
        return __asyncGenerator(this, arguments, function* getAsyncIterator_1() {
            do {
                const result = yield __await(this.fetchNext());
                if (result.count > 0) {
                    yield yield __await(result);
                }
            } while (this.hasMoreResults);
        });
    }
    /**
     * Read feed and retrieves the next page of results in Azure Cosmos DB.
     */
    fetchNext() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getFeedResponse();
            this.lastStatusCode = response.statusCode;
            this.nextIfNoneMatch = response.headers[Constants.HttpHeaders.ETag];
            return response;
        });
    }
    getFeedResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isPartitionSpecified) {
                throw new Error("Container is partitioned, but no partition key or partition key range id was specified.");
            }
            const feedOptions = { initialHeaders: {}, useIncrementalFeed: true };
            if (typeof this.changeFeedOptions.maxItemCount === "number") {
                feedOptions.maxItemCount = this.changeFeedOptions.maxItemCount;
            }
            if (this.changeFeedOptions.sessionToken) {
                feedOptions.sessionToken = this.changeFeedOptions.sessionToken;
            }
            if (this.nextIfNoneMatch) {
                feedOptions.accessCondition = {
                    type: Constants.HttpHeaders.IfNoneMatch,
                    condition: this.nextIfNoneMatch
                };
            }
            if (this.ifModifiedSince) {
                feedOptions.initialHeaders[Constants.HttpHeaders.IfModifiedSince] = this.ifModifiedSince;
            }
            const response = yield this.clientContext.queryFeed({
                path: this.resourceLink,
                resourceType: ResourceType.item,
                resourceId: this.resourceId,
                resultFn: (result) => (result ? result.Documents : []),
                query: undefined,
                options: feedOptions,
                partitionKey: this.partitionKey
            }); // TODO: some funky issues with query feed. Probably need to change it up.
            return new ChangeFeedResponse(response.result, response.result ? response.result.length : 0, response.code, response.headers);
        });
    }
}
ChangeFeedIterator.IfNoneMatchAllHeaderValue = "*";

class JSBI extends Array{constructor(a,b){if(a>JSBI.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");super(a),this.sign=b;}static BigInt(a){var b=Math.floor,c=Number.isFinite;if("number"==typeof a){if(0===a)return JSBI.__zero();if((0|a)===a)return 0>a?JSBI.__oneDigit(-a,!0):JSBI.__oneDigit(a,!1);if(!c(a)||b(a)!==a)throw new RangeError("The number "+a+" cannot be converted to BigInt because it is not an integer");return JSBI.__fromDouble(a)}if("string"==typeof a){const b=JSBI.__fromString(a);if(null===b)throw new SyntaxError("Cannot convert "+a+" to a BigInt");return b}if("boolean"==typeof a)return !0===a?JSBI.__oneDigit(1,!1):JSBI.__zero();if("object"==typeof a){if(a.constructor===JSBI)return a;const b=JSBI.__toPrimitive(a);return JSBI.BigInt(b)}throw new TypeError("Cannot convert "+a+" to a BigInt")}toDebugString(){const a=["BigInt["];for(const b of this)a.push((b?(b>>>0).toString(16):b)+", ");return a.push("]"),a.join("")}toString(a=10){if(2>a||36<a)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(a&a-1)?JSBI.__toStringBasePowerOfTwo(this,a):JSBI.__toStringGeneric(this,a,!1)}static toNumber(a){const b=a.length;if(0===b)return 0;if(1===b){const b=a.__unsignedDigit(0);return a.sign?-b:b}const c=a.__digit(b-1),d=JSBI.__clz32(c),e=32*b-d;if(1024<e)return a.sign?-Infinity:1/0;let f=e-1,g=c,h=b-1;const i=d+1;let j=32===i?0:g<<i;j>>>=12;const k=i-12;let l=12<=i?0:g<<20+i,m=20+i;0<k&&0<h&&(h--,g=a.__digit(h),j|=g>>>32-k,l=g<<k,m=k),0<m&&0<h&&(h--,g=a.__digit(h),l|=g>>>32-m,m-=32);const n=JSBI.__decideRounding(a,m,h,g);if((1===n||0===n&&1==(1&l))&&(l=l+1>>>0,0===l&&(j++,0!=j>>>20&&(j=0,f++,1023<f))))return a.sign?-Infinity:1/0;const o=a.sign?-2147483648:0;return f=f+1023<<20,JSBI.__kBitConversionInts[1]=o|f|j,JSBI.__kBitConversionInts[0]=l,JSBI.__kBitConversionDouble[0]}static unaryMinus(a){if(0===a.length)return a;const b=a.__copy();return b.sign=!a.sign,b}static bitwiseNot(a){return a.sign?JSBI.__absoluteSubOne(a).__trim():JSBI.__absoluteAddOne(a,!0)}static exponentiate(a,b){if(b.sign)throw new RangeError("Exponent must be positive");if(0===b.length)return JSBI.__oneDigit(1,!1);if(0===a.length)return a;if(1===a.length&&1===a.__digit(0))return a.sign&&0==(1&b.__digit(0))?JSBI.unaryMinus(a):a;if(1<b.length)throw new RangeError("BigInt too big");let c=b.__unsignedDigit(0);if(1===c)return a;if(c>=JSBI.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===a.length&&2===a.__digit(0)){const b=1+(c>>>5),d=a.sign&&0!=(1&c),e=new JSBI(b,d);e.__initializeDigits();const f=1<<(31&c);return e.__setDigit(b-1,f),e}let d=null,e=a;for(0!=(1&c)&&(d=a),c>>=1;0!==c;c>>=1)e=JSBI.multiply(e,e),0!=(1&c)&&(null===d?d=e:d=JSBI.multiply(d,e));return d}static multiply(a,b){if(0===a.length)return a;if(0===b.length)return b;let c=a.length+b.length;32<=a.__clzmsd()+b.__clzmsd()&&c--;const d=new JSBI(c,a.sign!==b.sign);d.__initializeDigits();for(let c=0;c<a.length;c++)JSBI.__multiplyAccumulate(b,a.__digit(c),d,c);return d.__trim()}static divide(a,b){if(0===b.length)throw new RangeError("Division by zero");if(0>JSBI.__absoluteCompare(a,b))return JSBI.__zero();const c=a.sign!==b.sign,d=b.__unsignedDigit(0);let e;if(1===b.length&&65535>=d){if(1===d)return c===a.sign?a:JSBI.unaryMinus(a);e=JSBI.__absoluteDivSmall(a,d,null);}else e=JSBI.__absoluteDivLarge(a,b,!0,!1);return e.sign=c,e.__trim()}static remainder(a,b){if(0===b.length)throw new RangeError("Division by zero");if(0>JSBI.__absoluteCompare(a,b))return a;const c=b.__unsignedDigit(0);if(1===b.length&&65535>=c){if(1===c)return JSBI.__zero();const b=JSBI.__absoluteModSmall(a,c);return 0===b?JSBI.__zero():JSBI.__oneDigit(b,a.sign)}const d=JSBI.__absoluteDivLarge(a,b,!1,!0);return d.sign=a.sign,d.__trim()}static add(a,b){const c=a.sign;return c===b.sign?JSBI.__absoluteAdd(a,b,c):0<=JSBI.__absoluteCompare(a,b)?JSBI.__absoluteSub(a,b,c):JSBI.__absoluteSub(b,a,!c)}static subtract(a,b){const c=a.sign;return c===b.sign?0<=JSBI.__absoluteCompare(a,b)?JSBI.__absoluteSub(a,b,c):JSBI.__absoluteSub(b,a,!c):JSBI.__absoluteAdd(a,b,c)}static leftShift(a,b){return 0===b.length||0===a.length?a:b.sign?JSBI.__rightShiftByAbsolute(a,b):JSBI.__leftShiftByAbsolute(a,b)}static signedRightShift(a,b){return 0===b.length||0===a.length?a:b.sign?JSBI.__leftShiftByAbsolute(a,b):JSBI.__rightShiftByAbsolute(a,b)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(a,b){return 0>JSBI.__compareToBigInt(a,b)}static lessThanOrEqual(a,b){return 0>=JSBI.__compareToBigInt(a,b)}static greaterThan(a,b){return 0<JSBI.__compareToBigInt(a,b)}static greaterThanOrEqual(a,b){return 0<=JSBI.__compareToBigInt(a,b)}static equal(a,b){if(a.sign!==b.sign)return !1;if(a.length!==b.length)return !1;for(let c=0;c<a.length;c++)if(a.__digit(c)!==b.__digit(c))return !1;return !0}static notEqual(a,b){return !JSBI.equal(a,b)}static bitwiseAnd(a,b){var c=Math.max;if(!a.sign&&!b.sign)return JSBI.__absoluteAnd(a,b).__trim();if(a.sign&&b.sign){const d=c(a.length,b.length)+1;let e=JSBI.__absoluteSubOne(a,d);const f=JSBI.__absoluteSubOne(b);return e=JSBI.__absoluteOr(e,f,e),JSBI.__absoluteAddOne(e,!0,e).__trim()}return a.sign&&([a,b]=[b,a]),JSBI.__absoluteAndNot(a,JSBI.__absoluteSubOne(b)).__trim()}static bitwiseXor(a,b){var c=Math.max;if(!a.sign&&!b.sign)return JSBI.__absoluteXor(a,b).__trim();if(a.sign&&b.sign){const d=c(a.length,b.length),e=JSBI.__absoluteSubOne(a,d),f=JSBI.__absoluteSubOne(b);return JSBI.__absoluteXor(e,f,e).__trim()}const d=c(a.length,b.length)+1;a.sign&&([a,b]=[b,a]);let e=JSBI.__absoluteSubOne(b,d);return e=JSBI.__absoluteXor(e,a,e),JSBI.__absoluteAddOne(e,!0,e).__trim()}static bitwiseOr(a,b){var c=Math.max;const d=c(a.length,b.length);if(!a.sign&&!b.sign)return JSBI.__absoluteOr(a,b).__trim();if(a.sign&&b.sign){let c=JSBI.__absoluteSubOne(a,d);const e=JSBI.__absoluteSubOne(b);return c=JSBI.__absoluteAnd(c,e,c),JSBI.__absoluteAddOne(c,!0,c).__trim()}a.sign&&([a,b]=[b,a]);let e=JSBI.__absoluteSubOne(b,d);return e=JSBI.__absoluteAndNot(e,a,e),JSBI.__absoluteAddOne(e,!0,e).__trim()}static asIntN(a,b){if(0===b.length)return b;if(0===a)return JSBI.__zero();if(a>=JSBI.__kMaxLengthBits)return b;const c=a+31>>>5;if(b.length<c)return b;const d=b.__unsignedDigit(c-1),e=1<<(31&a-1);if(b.length===c&&d<e)return b;if(!((d&e)===e))return JSBI.__truncateToNBits(a,b);if(!b.sign)return JSBI.__truncateAndSubFromPowerOfTwo(a,b,!0);if(0==(d&e-1)){for(let d=c-2;0<=d;d--)if(0!==b.__digit(d))return JSBI.__truncateAndSubFromPowerOfTwo(a,b,!1);return b.length===c&&d===e?b:JSBI.__truncateToNBits(a,b)}return JSBI.__truncateAndSubFromPowerOfTwo(a,b,!1)}static asUintN(a,b){if(0===b.length)return b;if(0===a)return JSBI.__zero();if(b.sign){if(a>JSBI.__kMaxLengthBits)throw new RangeError("BigInt too big");return JSBI.__truncateAndSubFromPowerOfTwo(a,b,!1)}if(a>=JSBI.__kMaxLengthBits)return b;const c=a+31>>>5;if(b.length<c)return b;const d=31&a;if(b.length==c){if(0===d)return b;const a=b.__digit(c-1);if(0==a>>>d)return b}return JSBI.__truncateToNBits(a,b)}static ADD(a,b){if(a=JSBI.__toPrimitive(a),b=JSBI.__toPrimitive(b),"string"==typeof a)return "string"!=typeof b&&(b=b.toString()),a+b;if("string"==typeof b)return a.toString()+b;if(a=JSBI.__toNumeric(a),b=JSBI.__toNumeric(b),JSBI.__isBigInt(a)&&JSBI.__isBigInt(b))return JSBI.add(a,b);if("number"==typeof a&&"number"==typeof b)return a+b;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(a,b){return JSBI.__compare(a,b,0)}static LE(a,b){return JSBI.__compare(a,b,1)}static GT(a,b){return JSBI.__compare(a,b,2)}static GE(a,b){return JSBI.__compare(a,b,3)}static EQ(a,b){for(;;){if(JSBI.__isBigInt(a))return JSBI.__isBigInt(b)?JSBI.equal(a,b):JSBI.EQ(b,a);if("number"==typeof a){if(JSBI.__isBigInt(b))return JSBI.__equalToNumber(b,a);if("object"!=typeof b)return a==b;b=JSBI.__toPrimitive(b);}else if("string"==typeof a){if(JSBI.__isBigInt(b))return a=JSBI.__fromString(a),null!==a&&JSBI.equal(a,b);if("object"!=typeof b)return a==b;b=JSBI.__toPrimitive(b);}else if("boolean"==typeof a){if(JSBI.__isBigInt(b))return JSBI.__equalToNumber(b,+a);if("object"!=typeof b)return a==b;b=JSBI.__toPrimitive(b);}else if("symbol"==typeof a){if(JSBI.__isBigInt(b))return !1;if("object"!=typeof b)return a==b;b=JSBI.__toPrimitive(b);}else if("object"==typeof a){if("object"==typeof b&&b.constructor!==JSBI)return a==b;a=JSBI.__toPrimitive(a);}else return a==b}}static NE(a,b){return !JSBI.EQ(a,b)}static __zero(){return new JSBI(0,!1)}static __oneDigit(a,b){const c=new JSBI(1,b);return c.__setDigit(0,a),c}__copy(){const a=new JSBI(this.length,this.sign);for(let b=0;b<this.length;b++)a[b]=this[b];return a}__trim(){let a=this.length,b=this[a-1];for(;0===b;)a--,b=this[a-1],this.pop();return 0===a&&(this.sign=!1),this}__initializeDigits(){for(let a=0;a<this.length;a++)this[a]=0;}static __decideRounding(a,b,c,d){if(0<b)return -1;let e;if(0>b)e=-b-1;else {if(0===c)return -1;c--,d=a.__digit(c),e=31;}let f=1<<e;if(0==(d&f))return -1;if(f-=1,0!=(d&f))return 1;for(;0<c;)if(c--,0!==a.__digit(c))return 1;return 0}static __fromDouble(a){JSBI.__kBitConversionDouble[0]=a;const b=2047&JSBI.__kBitConversionInts[1]>>>20,c=b-1023,d=(c>>>5)+1,e=new JSBI(d,0>a);let f=1048575&JSBI.__kBitConversionInts[1]|1048576,g=JSBI.__kBitConversionInts[0];const h=20,i=31&c;let j,k=0;if(i<20){const a=h-i;k=a+32,j=f>>>a,f=f<<32-a|g>>>a,g<<=32-a;}else if(i===20)k=32,j=f,f=g;else {const a=i-h;k=32-a,j=f<<a|g>>>32-a,f=g<<a;}e.__setDigit(d-1,j);for(let b=d-2;0<=b;b--)0<k?(k-=32,j=f,f=g):j=0,e.__setDigit(b,j);return e.__trim()}static __isWhitespace(a){return !!(13>=a&&9<=a)||(159>=a?32==a:131071>=a?160==a||5760==a:196607>=a?(a&=131071,10>=a||40==a||41==a||47==a||95==a||4096==a):65279==a)}static __fromString(a,b=0){let c=0;const e=a.length;let f=0;if(f===e)return JSBI.__zero();let g=a.charCodeAt(f);for(;JSBI.__isWhitespace(g);){if(++f===e)return JSBI.__zero();g=a.charCodeAt(f);}if(43===g){if(++f===e)return null;g=a.charCodeAt(f),c=1;}else if(45===g){if(++f===e)return null;g=a.charCodeAt(f),c=-1;}if(0===b){if(b=10,48===g){if(++f===e)return JSBI.__zero();if(g=a.charCodeAt(f),88===g||120===g){if(b=16,++f===e)return null;g=a.charCodeAt(f);}else if(79===g||111===g){if(b=8,++f===e)return null;g=a.charCodeAt(f);}else if(66===g||98===g){if(b=2,++f===e)return null;g=a.charCodeAt(f);}}}else if(16===b&&48===g){if(++f===e)return JSBI.__zero();if(g=a.charCodeAt(f),88===g||120===g){if(++f===e)return null;g=a.charCodeAt(f);}}for(;48===g;){if(++f===e)return JSBI.__zero();g=a.charCodeAt(f);}const h=e-f;let i=JSBI.__kMaxBitsPerChar[b],j=JSBI.__kBitsPerCharTableMultiplier-1;if(h>1073741824/i)return null;const k=i*h+j>>>JSBI.__kBitsPerCharTableShift,l=new JSBI(k+31>>>5,!1),n=10>b?b:10,o=10<b?b-10:0;if(0==(b&b-1)){i>>=JSBI.__kBitsPerCharTableShift;const b=[],c=[];let d=!1;do{let h=0,j=0;for(;;){let b;if(g-48>>>0<n)b=g-48;else if((32|g)-97>>>0<o)b=(32|g)-87;else {d=!0;break}if(j+=i,h=h<<i|b,++f===e){d=!0;break}if(g=a.charCodeAt(f),32<j+i)break}b.push(h),c.push(j);}while(!d);JSBI.__fillFromParts(l,b,c);}else {l.__initializeDigits();let c=!1,h=0;do{let k=0,p=1;for(;;){let i;if(g-48>>>0<n)i=g-48;else if((32|g)-97>>>0<o)i=(32|g)-87;else {c=!0;break}const d=p*b;if(4294967295<d)break;if(p=d,k=k*b+i,h++,++f===e){c=!0;break}g=a.charCodeAt(f);}j=32*JSBI.__kBitsPerCharTableMultiplier-1;const q=i*h+j>>>JSBI.__kBitsPerCharTableShift+5;l.__inplaceMultiplyAdd(p,k,q);}while(!c)}if(f!==e){if(!JSBI.__isWhitespace(g))return null;for(f++;f<e;f++)if(g=a.charCodeAt(f),!JSBI.__isWhitespace(g))return null}return 0!=c&&10!==b?null:(l.sign=-1==c,l.__trim())}static __fillFromParts(a,b,c){let d=0,e=0,f=0;for(let g=b.length-1;0<=g;g--){const h=b[g],i=c[g];e|=h<<f,f+=i,32===f?(a.__setDigit(d++,e),f=0,e=0):32<f&&(a.__setDigit(d++,e),f-=32,e=h>>>i-f);}if(0!==e){if(d>=a.length)throw new Error("implementation bug");a.__setDigit(d++,e);}for(;d<a.length;d++)a.__setDigit(d,0);}static __toStringBasePowerOfTwo(a,b){const c=a.length;let d=b-1;d=(85&d>>>1)+(85&d),d=(51&d>>>2)+(51&d),d=(15&d>>>4)+(15&d);const e=d,f=b-1,g=a.__digit(c-1),h=JSBI.__clz32(g);let i=0|(32*c-h+e-1)/e;if(a.sign&&i++,268435456<i)throw new Error("string too long");const j=Array(i);let k=i-1,l=0,m=0;for(let d=0;d<c-1;d++){const b=a.__digit(d),c=(l|b<<m)&f;j[k--]=JSBI.__kConversionChars[c];const g=e-m;for(l=b>>>g,m=32-g;m>=e;)j[k--]=JSBI.__kConversionChars[l&f],l>>>=e,m-=e;}const n=(l|g<<m)&f;for(j[k--]=JSBI.__kConversionChars[n],l=g>>>e-m;0!==l;)j[k--]=JSBI.__kConversionChars[l&f],l>>>=e;if(a.sign&&(j[k--]="-"),-1!=k)throw new Error("implementation bug");return j.join("")}static __toStringGeneric(a,b,c){const d=a.length;if(0===d)return "";if(1===d){let d=a.__unsignedDigit(0).toString(b);return !1===c&&a.sign&&(d="-"+d),d}const e=32*d-JSBI.__clz32(a.__digit(d-1)),f=JSBI.__kMaxBitsPerChar[b],g=f-1;let h=e*JSBI.__kBitsPerCharTableMultiplier;h+=g-1,h=0|h/g;const i=h+1>>1,j=JSBI.exponentiate(JSBI.__oneDigit(b,!1),JSBI.__oneDigit(i,!1));let k,l;const m=j.__unsignedDigit(0);if(1===j.length&&65535>=m){k=new JSBI(a.length,!1),k.__initializeDigits();let c=0;for(let b=2*a.length-1;0<=b;b--){const d=c<<16|a.__halfDigit(b);k.__setHalfDigit(b,0|d/m),c=0|d%m;}l=c.toString(b);}else {const c=JSBI.__absoluteDivLarge(a,j,!0,!0);k=c.quotient;const d=c.remainder.__trim();l=JSBI.__toStringGeneric(d,b,!0);}k.__trim();let n=JSBI.__toStringGeneric(k,b,!0);for(;l.length<i;)l="0"+l;return !1===c&&a.sign&&(n="-"+n),n+l}static __unequalSign(a){return a?-1:1}static __absoluteGreater(a){return a?-1:1}static __absoluteLess(a){return a?1:-1}static __compareToBigInt(a,b){const c=a.sign;if(c!==b.sign)return JSBI.__unequalSign(c);const d=JSBI.__absoluteCompare(a,b);return 0<d?JSBI.__absoluteGreater(c):0>d?JSBI.__absoluteLess(c):0}static __compareToNumber(a,b){if(b|!0){const c=a.sign,d=0>b;if(c!==d)return JSBI.__unequalSign(c);if(0===a.length){if(d)throw new Error("implementation bug");return 0===b?0:-1}if(1<a.length)return JSBI.__absoluteGreater(c);const e=Math.abs(b),f=a.__unsignedDigit(0);return f>e?JSBI.__absoluteGreater(c):f<e?JSBI.__absoluteLess(c):0}return JSBI.__compareToDouble(a,b)}static __compareToDouble(a,b){if(b!==b)return b;if(b===1/0)return -1;if(b===-Infinity)return 1;const c=a.sign;if(c!==0>b)return JSBI.__unequalSign(c);if(0===b)throw new Error("implementation bug: should be handled elsewhere");if(0===a.length)return -1;JSBI.__kBitConversionDouble[0]=b;const d=2047&JSBI.__kBitConversionInts[1]>>>20;if(2047==d)throw new Error("implementation bug: handled elsewhere");const e=d-1023;if(0>e)return JSBI.__absoluteGreater(c);const f=a.length;let g=a.__digit(f-1);const h=JSBI.__clz32(g),i=32*f-h,j=e+1;if(i<j)return JSBI.__absoluteLess(c);if(i>j)return JSBI.__absoluteGreater(c);let k=1048576|1048575&JSBI.__kBitConversionInts[1],l=JSBI.__kBitConversionInts[0];const m=20,n=31-h;if(n!==(i-1)%31)throw new Error("implementation bug");let o,p=0;if(20>n){const a=m-n;p=a+32,o=k>>>a,k=k<<32-a|l>>>a,l<<=32-a;}else if(20===n)p=32,o=k,k=l;else {const a=n-m;p=32-a,o=k<<a|l>>>32-a,k=l<<a;}if(g>>>=0,o>>>=0,g>o)return JSBI.__absoluteGreater(c);if(g<o)return JSBI.__absoluteLess(c);for(let d=f-2;0<=d;d--){0<p?(p-=32,o=k>>>0,k=l,l=0):o=0;const b=a.__unsignedDigit(d);if(b>o)return JSBI.__absoluteGreater(c);if(b<o)return JSBI.__absoluteLess(c)}if(0!==k||0!==l){if(0===p)throw new Error("implementation bug");return JSBI.__absoluteLess(c)}return 0}static __equalToNumber(a,b){var c=Math.abs;return b|0===b?0===b?0===a.length:1===a.length&&a.sign===0>b&&a.__unsignedDigit(0)===c(b):0===JSBI.__compareToDouble(a,b)}static __comparisonResultToBool(a,b){switch(b){case 0:return 0>a;case 1:return 0>=a;case 2:return 0<a;case 3:return 0<=a;}throw new Error("unreachable")}static __compare(a,b,c){if(a=JSBI.__toPrimitive(a),b=JSBI.__toPrimitive(b),"string"==typeof a&&"string"==typeof b)switch(c){case 0:return a<b;case 1:return a<=b;case 2:return a>b;case 3:return a>=b;}if(JSBI.__isBigInt(a)&&"string"==typeof b)return b=JSBI.__fromString(b),null!==b&&JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(a,b),c);if("string"==typeof a&&JSBI.__isBigInt(b))return a=JSBI.__fromString(a),null!==a&&JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(a,b),c);if(a=JSBI.__toNumeric(a),b=JSBI.__toNumeric(b),JSBI.__isBigInt(a)){if(JSBI.__isBigInt(b))return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(a,b),c);if("number"!=typeof b)throw new Error("implementation bug");return JSBI.__comparisonResultToBool(JSBI.__compareToNumber(a,b),c)}if("number"!=typeof a)throw new Error("implementation bug");if(JSBI.__isBigInt(b))return JSBI.__comparisonResultToBool(JSBI.__compareToNumber(b,a),2^c);if("number"!=typeof b)throw new Error("implementation bug");return 0===c?a<b:1===c?a<=b:2===c?a>b:3===c?a>=b:void 0}__clzmsd(){return JSBI.__clz32(this[this.length-1])}static __absoluteAdd(a,b,c){if(a.length<b.length)return JSBI.__absoluteAdd(b,a,c);if(0===a.length)return a;if(0===b.length)return a.sign===c?a:JSBI.unaryMinus(a);let d=a.length;(0===a.__clzmsd()||b.length===a.length&&0===b.__clzmsd())&&d++;const e=new JSBI(d,c);let f=0,g=0;for(;g<b.length;g++){const c=b.__digit(g),d=a.__digit(g),h=(65535&d)+(65535&c)+f,i=(d>>>16)+(c>>>16)+(h>>>16);f=i>>>16,e.__setDigit(g,65535&h|i<<16);}for(;g<a.length;g++){const b=a.__digit(g),c=(65535&b)+f,d=(b>>>16)+(c>>>16);f=d>>>16,e.__setDigit(g,65535&c|d<<16);}return g<e.length&&e.__setDigit(g,f),e.__trim()}static __absoluteSub(a,b,c){if(0===a.length)return a;if(0===b.length)return a.sign===c?a:JSBI.unaryMinus(a);const d=new JSBI(a.length,c);let e=0,f=0;for(;f<b.length;f++){const c=a.__digit(f),g=b.__digit(f),h=(65535&c)-(65535&g)-e;e=1&h>>>16;const i=(c>>>16)-(g>>>16)-e;e=1&i>>>16,d.__setDigit(f,65535&h|i<<16);}for(;f<a.length;f++){const b=a.__digit(f),c=(65535&b)-e;e=1&c>>>16;const g=(b>>>16)-e;e=1&g>>>16,d.__setDigit(f,65535&c|g<<16);}return d.__trim()}static __absoluteAddOne(a,b,c=null){const d=a.length;null===c?c=new JSBI(d,b):c.sign=b;let e=!0;for(let f,g=0;g<d;g++){if(f=a.__digit(g),e){const a=-1===f;f=0|f+1,e=a;}c.__setDigit(g,f);}return e&&c.__setDigitGrow(d,1),c}static __absoluteSubOne(a,b){const c=a.length;b=b||c;const d=new JSBI(b,!1);let e=!0;for(let f,g=0;g<c;g++){if(f=a.__digit(g),e){const a=0===f;f=0|f-1,e=a;}d.__setDigit(g,f);}if(e)throw new Error("implementation bug");for(let e=c;e<b;e++)d.__setDigit(e,0);return d}static __absoluteAnd(a,b,c=null){let d=a.length,e=b.length,f=e;if(d<e){f=d;const c=a,g=d;a=b,d=e,b=c,e=g;}let g=f;null===c?c=new JSBI(g,!1):g=c.length;let h=0;for(;h<f;h++)c.__setDigit(h,a.__digit(h)&b.__digit(h));for(;h<g;h++)c.__setDigit(h,0);return c}static __absoluteAndNot(a,b,c=null){const d=a.length,e=b.length;let f=e;d<e&&(f=d);let g=d;null===c?c=new JSBI(g,!1):g=c.length;let h=0;for(;h<f;h++)c.__setDigit(h,a.__digit(h)&~b.__digit(h));for(;h<d;h++)c.__setDigit(h,a.__digit(h));for(;h<g;h++)c.__setDigit(h,0);return c}static __absoluteOr(a,b,c=null){let d=a.length,e=b.length,f=e;if(d<e){f=d;const c=a,g=d;a=b,d=e,b=c,e=g;}let g=d;null===c?c=new JSBI(g,!1):g=c.length;let h=0;for(;h<f;h++)c.__setDigit(h,a.__digit(h)|b.__digit(h));for(;h<d;h++)c.__setDigit(h,a.__digit(h));for(;h<g;h++)c.__setDigit(h,0);return c}static __absoluteXor(a,b,c=null){let d=a.length,e=b.length,f=e;if(d<e){f=d;const c=a,g=d;a=b,d=e,b=c,e=g;}let g=d;null===c?c=new JSBI(g,!1):g=c.length;let h=0;for(;h<f;h++)c.__setDigit(h,a.__digit(h)^b.__digit(h));for(;h<d;h++)c.__setDigit(h,a.__digit(h));for(;h<g;h++)c.__setDigit(h,0);return c}static __absoluteCompare(a,b){const c=a.length-b.length;if(0!=c)return c;let d=a.length-1;for(;0<=d&&a.__digit(d)===b.__digit(d);)d--;return 0>d?0:a.__unsignedDigit(d)>b.__unsignedDigit(d)?1:-1}static __multiplyAccumulate(a,b,c,d){if(0===b)return;const e=65535&b,f=b>>>16;let g=0,h=0,j=0;for(let k=0;k<a.length;k++,d++){let b=c.__digit(d),i=65535&b,l=b>>>16;const m=a.__digit(k),n=65535&m,o=m>>>16,p=JSBI.__imul(n,e),q=JSBI.__imul(n,f),r=JSBI.__imul(o,e),s=JSBI.__imul(o,f);i+=h+(65535&p),l+=j+g+(i>>>16)+(p>>>16)+(65535&q)+(65535&r),g=l>>>16,h=(q>>>16)+(r>>>16)+(65535&s)+g,g=h>>>16,h&=65535,j=s>>>16,b=65535&i|l<<16,c.__setDigit(d,b);}for(;0!=g||0!==h||0!==j;d++){let a=c.__digit(d);const b=(65535&a)+h,e=(a>>>16)+(b>>>16)+j+g;h=0,j=0,g=e>>>16,a=65535&b|e<<16,c.__setDigit(d,a);}}static __internalMultiplyAdd(a,b,c,d,e){let f=c,g=0;for(let h=0;h<d;h++){const c=a.__digit(h),d=JSBI.__imul(65535&c,b),i=(65535&d)+g+f;f=i>>>16;const j=JSBI.__imul(c>>>16,b),k=(65535&j)+(d>>>16)+f;f=k>>>16,g=j>>>16,e.__setDigit(h,k<<16|65535&i);}if(e.length>d)for(e.__setDigit(d++,f+g);d<e.length;)e.__setDigit(d++,0);else if(0!==f+g)throw new Error("implementation bug")}__inplaceMultiplyAdd(a,b,c){c>this.length&&(c=this.length);const e=65535&a,f=a>>>16;let g=0,h=65535&b,j=b>>>16;for(let k=0;k<c;k++){const a=this.__digit(k),b=65535&a,c=a>>>16,d=JSBI.__imul(b,e),i=JSBI.__imul(b,f),l=JSBI.__imul(c,e),m=JSBI.__imul(c,f),n=h+(65535&d),o=j+g+(n>>>16)+(d>>>16)+(65535&i)+(65535&l);h=(i>>>16)+(l>>>16)+(65535&m)+(o>>>16),g=h>>>16,h&=65535,j=m>>>16;this.__setDigit(k,65535&n|o<<16);}if(0!=g||0!==h||0!==j)throw new Error("implementation bug")}static __absoluteDivSmall(a,b,c){null===c&&(c=new JSBI(a.length,!1));let d=0;for(let e,f=2*a.length-1;0<=f;f-=2){e=(d<<16|a.__halfDigit(f))>>>0;const g=0|e/b;d=0|e%b,e=(d<<16|a.__halfDigit(f-1))>>>0;const h=0|e/b;d=0|e%b,c.__setDigit(f>>>1,g<<16|h);}return c}static __absoluteModSmall(a,b){let c=0;for(let d=2*a.length-1;0<=d;d--){const e=(c<<16|a.__halfDigit(d))>>>0;c=0|e%b;}return c}static __absoluteDivLarge(a,b,d,e){const f=b.__halfDigitLength(),g=b.length,c=a.__halfDigitLength()-f;let h=null;d&&(h=new JSBI(c+2>>>1,!1),h.__initializeDigits());const i=new JSBI(f+2>>>1,!1);i.__initializeDigits();const j=JSBI.__clz16(b.__halfDigit(f-1));0<j&&(b=JSBI.__specialLeftShift(b,j,0));const k=JSBI.__specialLeftShift(a,j,1),l=b.__halfDigit(f-1);let m=0;for(let n,o=c;0<=o;o--){n=65535;const a=k.__halfDigit(o+f);if(a!==l){const c=(a<<16|k.__halfDigit(o+f-1))>>>0;n=0|c/l;let d=0|c%l;const e=b.__halfDigit(f-2),g=k.__halfDigit(o+f-2);for(;JSBI.__imul(n,e)>>>0>(d<<16|g)>>>0&&(n--,d+=l,!(65535<d)););}JSBI.__internalMultiplyAdd(b,n,0,g,i);let e=k.__inplaceSub(i,o,f+1);0!==e&&(e=k.__inplaceAdd(b,o,f),k.__setHalfDigit(o+f,k.__halfDigit(o+f)+e),n--),d&&(1&o?m=n<<16:h.__setDigit(o>>>1,m|n));}return e?(k.__inplaceRightShift(j),d?{quotient:h,remainder:k}:k):d?h:void 0}static __clz16(a){return JSBI.__clz32(a)-16}__inplaceAdd(a,b,c){let d=0;for(let e=0;e<c;e++){const c=this.__halfDigit(b+e)+a.__halfDigit(e)+d;d=c>>>16,this.__setHalfDigit(b+e,c);}return d}__inplaceSub(a,b,c){let d=0;if(1&b){b>>=1;let e=this.__digit(b),f=65535&e,g=0;for(;g<c-1>>>1;g++){const c=a.__digit(g),h=(e>>>16)-(65535&c)-d;d=1&h>>>16,this.__setDigit(b+g,h<<16|65535&f),e=this.__digit(b+g+1),f=(65535&e)-(c>>>16)-d,d=1&f>>>16;}const h=a.__digit(g),i=(e>>>16)-(65535&h)-d;d=1&i>>>16,this.__setDigit(b+g,i<<16|65535&f);if(b+g+1>=this.length)throw new RangeError("out of bounds");0==(1&c)&&(e=this.__digit(b+g+1),f=(65535&e)-(h>>>16)-d,d=1&f>>>16,this.__setDigit(b+a.length,4294901760&e|65535&f));}else {b>>=1;let e=0;for(;e<a.length-1;e++){const c=this.__digit(b+e),f=a.__digit(e),g=(65535&c)-(65535&f)-d;d=1&g>>>16;const h=(c>>>16)-(f>>>16)-d;d=1&h>>>16,this.__setDigit(b+e,h<<16|65535&g);}const f=this.__digit(b+e),g=a.__digit(e),h=(65535&f)-(65535&g)-d;d=1&h>>>16;let i=0;0==(1&c)&&(i=(f>>>16)-(g>>>16)-d,d=1&i>>>16),this.__setDigit(b+e,i<<16|65535&h);}return d}__inplaceRightShift(a){if(0===a)return;let b=this.__digit(0)>>>a;const c=this.length-1;for(let e=0;e<c;e++){const c=this.__digit(e+1);this.__setDigit(e,c<<32-a|b),b=c>>>a;}this.__setDigit(c,b);}static __specialLeftShift(a,b,c){const d=a.length,e=new JSBI(d+c,!1);if(0===b){for(let b=0;b<d;b++)e.__setDigit(b,a.__digit(b));return 0<c&&e.__setDigit(d,0),e}let f=0;for(let g=0;g<d;g++){const c=a.__digit(g);e.__setDigit(g,c<<b|f),f=c>>>32-b;}return 0<c&&e.__setDigit(d,f),e}static __leftShiftByAbsolute(a,b){const c=JSBI.__toShiftAmount(b);if(0>c)throw new RangeError("BigInt too big");const e=c>>>5,f=31&c,g=a.length,h=0!==f&&0!=a.__digit(g-1)>>>32-f,j=g+e+(h?1:0),k=new JSBI(j,a.sign);if(0===f){let b=0;for(;b<e;b++)k.__setDigit(b,0);for(;b<j;b++)k.__setDigit(b,a.__digit(b-e));}else {let b=0;for(let a=0;a<e;a++)k.__setDigit(a,0);for(let c=0;c<g;c++){const g=a.__digit(c);k.__setDigit(c+e,g<<f|b),b=g>>>32-f;}if(h)k.__setDigit(g+e,b);else if(0!==b)throw new Error("implementation bug")}return k.__trim()}static __rightShiftByAbsolute(a,b){const c=a.length,d=a.sign,e=JSBI.__toShiftAmount(b);if(0>e)return JSBI.__rightShiftByMaximum(d);const f=e>>>5,g=31&e;let h=c-f;if(0>=h)return JSBI.__rightShiftByMaximum(d);let i=!1;if(d){if(0!=(a.__digit(f)&(1<<g)-1))i=!0;else for(let b=0;b<f;b++)if(0!==a.__digit(b)){i=!0;break}}if(i&&0===g){const b=a.__digit(c-1);0==~b&&h++;}let j=new JSBI(h,d);if(0===g)for(let b=f;b<c;b++)j.__setDigit(b-f,a.__digit(b));else {let b=a.__digit(f)>>>g;const d=c-f-1;for(let c=0;c<d;c++){const e=a.__digit(c+f+1);j.__setDigit(c,e<<32-g|b),b=e>>>g;}j.__setDigit(d,b);}return i&&(j=JSBI.__absoluteAddOne(j,!0,j)),j.__trim()}static __rightShiftByMaximum(a){return a?JSBI.__oneDigit(1,!0):JSBI.__zero()}static __toShiftAmount(a){if(1<a.length)return -1;const b=a.__unsignedDigit(0);return b>JSBI.__kMaxLengthBits?-1:b}static __toPrimitive(a,b="default"){if("object"!=typeof a)return a;if(a.constructor===JSBI)return a;const c=a[Symbol.toPrimitive];if(c){const a=c(b);if("object"!=typeof a)return a;throw new TypeError("Cannot convert object to primitive value")}const d=a.valueOf;if(d){const b=d.call(a);if("object"!=typeof b)return b}const e=a.toString;if(e){const b=e.call(a);if("object"!=typeof b)return b}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(a){return JSBI.__isBigInt(a)?a:+a}static __isBigInt(a){return "object"==typeof a&&a.constructor===JSBI}static __truncateToNBits(a,b){const c=a+31>>>5,d=new JSBI(c,b.sign),e=c-1;for(let c=0;c<e;c++)d.__setDigit(c,b.__digit(c));let f=b.__digit(e);if(0!=(31&a)){const b=32-(31&a);f=f<<b>>>b;}return d.__setDigit(e,f),d.__trim()}static __truncateAndSubFromPowerOfTwo(a,b,c){var d=Math.min;const e=a+31>>>5,f=new JSBI(e,c);let g=0;const h=e-1;let j=0;for(const e=d(h,b.length);g<e;g++){const a=b.__digit(g),c=0-(65535&a)-j;j=1&c>>>16;const d=0-(a>>>16)-j;j=1&d>>>16,f.__setDigit(g,65535&c|d<<16);}for(;g<h;g++)f.__setDigit(g,0|-j);let k=h<b.length?b.__digit(h):0;const l=31&a;let m;if(0==l){const a=0-(65535&k)-j;j=1&a>>>16;const b=0-(k>>>16)-j;m=65535&a|b<<16;}else {const a=32-l;k=k<<a>>>a;const b=1<<32-a,c=(65535&b)-(65535&k)-j;j=1&c>>>16;const d=(b>>>16)-(k>>>16)-j;m=65535&c|d<<16,m&=b-1;}return f.__setDigit(h,m),f.__trim()}__digit(a){return this[a]}__unsignedDigit(a){return this[a]>>>0}__setDigit(a,b){this[a]=0|b;}__setDigitGrow(a,b){this[a]=0|b;}__halfDigitLength(){const a=this.length;return 65535>=this.__unsignedDigit(a-1)?2*a-1:2*a}__halfDigit(a){return 65535&this[a>>>1]>>>((1&a)<<4)}__setHalfDigit(a,b){const c=a>>>1,d=this.__digit(c),e=1&a?65535&d|b<<16:4294901760&d|65535&b;this.__setDigit(c,e);}static __digitPow(a,b){let c=1;for(;0<b;)1&b&&(c*=a),b>>>=1,a*=a;return c}}JSBI.__kMaxLength=33554432,JSBI.__kMaxLengthBits=JSBI.__kMaxLength<<5,JSBI.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],JSBI.__kBitsPerCharTableShift=5,JSBI.__kBitsPerCharTableMultiplier=1<<JSBI.__kBitsPerCharTableShift,JSBI.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],JSBI.__kBitConversionBuffer=new ArrayBuffer(8),JSBI.__kBitConversionDouble=new Float64Array(JSBI.__kBitConversionBuffer),JSBI.__kBitConversionInts=new Int32Array(JSBI.__kBitConversionBuffer),JSBI.__clz32=Math.clz32||function(a){return 0===a?32:0|31-(0|Math.log(a>>>0)/Math.LN2)},JSBI.__imul=Math.imul||function(c,a){return 0|c*a};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const BytePrefix = {
    Undefined: "00",
    Null: "01",
    False: "02",
    True: "03",
    MinNumber: "04",
    Number: "05",
    MaxNumber: "06",
    MinString: "07",
    String: "08",
    MaxString: "09",
    Int64: "0a",
    Int32: "0b",
    Int16: "0c",
    Int8: "0d",
    Uint64: "0e",
    Uint32: "0f",
    Uint16: "10",
    Uint8: "11",
    Binary: "12",
    Guid: "13",
    Float: "14",
    Infinity: "FF"
};

// Copyright (c) Microsoft Corporation.
function writeNumberForBinaryEncodingJSBI(hash) {
    let payload = encodeNumberAsUInt64JSBI(hash);
    let outputStream = Buffer.from(BytePrefix.Number, "hex");
    const firstChunk = JSBI.asUintN(64, JSBI.signedRightShift(payload, JSBI.BigInt(56)));
    outputStream = Buffer.concat([outputStream, Buffer.from(firstChunk.toString(16), "hex")]);
    payload = JSBI.asUintN(64, JSBI.leftShift(JSBI.BigInt(payload), JSBI.BigInt(0x8)));
    let byteToWrite = JSBI.BigInt(0);
    let shifted;
    let padded;
    do {
        {
            // we pad because after shifting because we will produce characters like "f" or similar,
            // which cannot be encoded as hex in a buffer because they are invalid hex
            // https://github.com/nodejs/node/issues/24491
            padded = byteToWrite.toString(16).padStart(2, "0");
            if (padded !== "00") {
                outputStream = Buffer.concat([outputStream, Buffer.from(padded, "hex")]);
            }
        }
        shifted = JSBI.asUintN(64, JSBI.signedRightShift(payload, JSBI.BigInt(56)));
        byteToWrite = JSBI.asUintN(64, JSBI.bitwiseOr(shifted, JSBI.BigInt(0x01)));
        payload = JSBI.asUintN(64, JSBI.leftShift(payload, JSBI.BigInt(7)));
    } while (JSBI.notEqual(payload, JSBI.BigInt(0)));
    const lastChunk = JSBI.asUintN(64, JSBI.bitwiseAnd(byteToWrite, JSBI.BigInt(0xfe)));
    // we pad because after shifting because we will produce characters like "f" or similar,
    // which cannot be encoded as hex in a buffer because they are invalid hex
    // https://github.com/nodejs/node/issues/24491
    padded = lastChunk.toString(16).padStart(2, "0");
    if (padded !== "00") {
        outputStream = Buffer.concat([outputStream, Buffer.from(padded, "hex")]);
    }
    return outputStream;
}
function encodeNumberAsUInt64JSBI(value) {
    const rawValueBits = getRawBitsJSBI(value);
    const mask = JSBI.BigInt(0x8000000000000000);
    const returned = rawValueBits < mask
        ? JSBI.bitwiseXor(rawValueBits, mask)
        : JSBI.add(JSBI.bitwiseNot(rawValueBits), JSBI.BigInt(1));
    return returned;
}
function doubleToByteArrayJSBI(double) {
    const output = Buffer.alloc(8);
    const lng = getRawBitsJSBI(double);
    for (let i = 0; i < 8; i++) {
        output[i] = JSBI.toNumber(JSBI.bitwiseAnd(JSBI.signedRightShift(lng, JSBI.multiply(JSBI.BigInt(i), JSBI.BigInt(8))), JSBI.BigInt(0xff)));
    }
    return output;
}
function getRawBitsJSBI(value) {
    const view = new DataView(new ArrayBuffer(8));
    view.setFloat64(0, value);
    return JSBI.BigInt(`0x${buf2hex(view.buffer)}`);
}
function buf2hex(buffer) {
    return Array.prototype.map
        .call(new Uint8Array(buffer), (x) => ("00" + x.toString(16)).slice(-2))
        .join("");
}

// Copyright (c) Microsoft Corporation.
function writeStringForBinaryEncoding(payload) {
    let outputStream = Buffer.from(BytePrefix.String, "hex");
    const MAX_STRING_BYTES_TO_APPEND = 100;
    const byteArray = [...Buffer.from(payload)];
    const isShortString = payload.length <= MAX_STRING_BYTES_TO_APPEND;
    for (let index = 0; index < (isShortString ? byteArray.length : MAX_STRING_BYTES_TO_APPEND + 1); index++) {
        let charByte = byteArray[index];
        if (charByte < 0xff) {
            charByte++;
        }
        outputStream = Buffer.concat([outputStream, Buffer.from(charByte.toString(16), "hex")]);
    }
    if (isShortString) {
        outputStream = Buffer.concat([outputStream, Buffer.from(BytePrefix.Undefined, "hex")]);
    }
    return outputStream;
}

// +----------------------------------------------------------------------+
// | murmurHash3js.js v3.0.1 // https://github.com/pid/murmurHash3js
// | A javascript implementation of MurmurHash3's x86 hashing algorithms. |
// |----------------------------------------------------------------------|
// | Copyright (c) 2012-2015 Karan Lyons                                       |
// | https://github.com/karanlyons/murmurHash3.js/blob/c1778f75792abef7bdd74bc85d2d4e1a3d25cfe9/murmurHash3.js |
// | Freely distributable under the MIT license.                          |
// +----------------------------------------------------------------------+
// PRIVATE FUNCTIONS
// -----------------
function _x86Multiply(m, n) {
    //
    // Given two 32bit ints, returns the two multiplied together as a
    // 32bit int.
    //
    return (m & 0xffff) * n + ((((m >>> 16) * n) & 0xffff) << 16);
}
function _x86Rotl(m, n) {
    //
    // Given a 32bit int and an int representing a number of bit positions,
    // returns the 32bit int rotated left by that number of positions.
    //
    return (m << n) | (m >>> (32 - n));
}
function _x86Fmix(h) {
    //
    // Given a block, returns murmurHash3's final x86 mix of that block.
    //
    h ^= h >>> 16;
    h = _x86Multiply(h, 0x85ebca6b);
    h ^= h >>> 13;
    h = _x86Multiply(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return h;
}
function _x64Add(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    const o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
function _x64Multiply(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    const o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
function _x64Rotl(m, n) {
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    n %= 64;
    if (n === 32) {
        return [m[1], m[0]];
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
    }
    else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
    }
}
function _x64LeftShift(m, n) {
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    n %= 64;
    if (n === 0) {
        return m;
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
    }
    else {
        return [m[1] << (n - 32), 0];
    }
}
function _x64Xor(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    return [m[0] ^ n[0], m[1] ^ n[1]];
}
function _x64Fmix(h) {
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    h = _x64Xor(h, [0, h[0] >>> 1]);
    h = _x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = _x64Xor(h, [0, h[0] >>> 1]);
    h = _x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = _x64Xor(h, [0, h[0] >>> 1]);
    return h;
}
// PUBLIC FUNCTIONS
// ----------------
function x86Hash32(bytes, seed) {
    //
    // Given a string and an optional seed as an int, returns a 32 bit hash
    // using the x86 flavor of MurmurHash3, as an unsigned int.
    //
    seed = seed || 0;
    const remainder = bytes.length % 4;
    const blocks = bytes.length - remainder;
    let h1 = seed;
    let k1 = 0;
    const c1 = 0xcc9e2d51;
    const c2 = 0x1b873593;
    let j = 0;
    for (let i = 0; i < blocks; i = i + 4) {
        k1 = bytes[i] | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24);
        k1 = _x86Multiply(k1, c1);
        k1 = _x86Rotl(k1, 15);
        k1 = _x86Multiply(k1, c2);
        h1 ^= k1;
        h1 = _x86Rotl(h1, 13);
        h1 = _x86Multiply(h1, 5) + 0xe6546b64;
        j = i + 4;
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= bytes[j + 2] << 16;
        case 2:
            k1 ^= bytes[j + 1] << 8;
        case 1:
            k1 ^= bytes[j];
            k1 = _x86Multiply(k1, c1);
            k1 = _x86Rotl(k1, 15);
            k1 = _x86Multiply(k1, c2);
            h1 ^= k1;
    }
    h1 ^= bytes.length;
    h1 = _x86Fmix(h1);
    return h1 >>> 0;
}
function x86Hash128(bytes, seed) {
    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x86 flavor of MurmurHash3, as an unsigned hex.
    //
    seed = seed || 0;
    const remainder = bytes.length % 16;
    const blocks = bytes.length - remainder;
    let h1 = seed;
    let h2 = seed;
    let h3 = seed;
    let h4 = seed;
    let k1 = 0;
    let k2 = 0;
    let k3 = 0;
    let k4 = 0;
    const c1 = 0x239b961b;
    const c2 = 0xab0e9789;
    const c3 = 0x38b34ae5;
    const c4 = 0xa1e38b93;
    let j = 0;
    for (let i = 0; i < blocks; i = i + 16) {
        k1 = bytes[i] | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24);
        k2 = bytes[i + 4] | (bytes[i + 5] << 8) | (bytes[i + 6] << 16) | (bytes[i + 7] << 24);
        k3 = bytes[i + 8] | (bytes[i + 9] << 8) | (bytes[i + 10] << 16) | (bytes[i + 11] << 24);
        k4 = bytes[i + 12] | (bytes[i + 13] << 8) | (bytes[i + 14] << 16) | (bytes[i + 15] << 24);
        k1 = _x86Multiply(k1, c1);
        k1 = _x86Rotl(k1, 15);
        k1 = _x86Multiply(k1, c2);
        h1 ^= k1;
        h1 = _x86Rotl(h1, 19);
        h1 += h2;
        h1 = _x86Multiply(h1, 5) + 0x561ccd1b;
        k2 = _x86Multiply(k2, c2);
        k2 = _x86Rotl(k2, 16);
        k2 = _x86Multiply(k2, c3);
        h2 ^= k2;
        h2 = _x86Rotl(h2, 17);
        h2 += h3;
        h2 = _x86Multiply(h2, 5) + 0x0bcaa747;
        k3 = _x86Multiply(k3, c3);
        k3 = _x86Rotl(k3, 17);
        k3 = _x86Multiply(k3, c4);
        h3 ^= k3;
        h3 = _x86Rotl(h3, 15);
        h3 += h4;
        h3 = _x86Multiply(h3, 5) + 0x96cd1c35;
        k4 = _x86Multiply(k4, c4);
        k4 = _x86Rotl(k4, 18);
        k4 = _x86Multiply(k4, c1);
        h4 ^= k4;
        h4 = _x86Rotl(h4, 13);
        h4 += h1;
        h4 = _x86Multiply(h4, 5) + 0x32ac3b17;
        j = i + 16;
    }
    k1 = 0;
    k2 = 0;
    k3 = 0;
    k4 = 0;
    switch (remainder) {
        case 15:
            k4 ^= bytes[j + 14] << 16;
        case 14:
            k4 ^= bytes[j + 13] << 8;
        case 13:
            k4 ^= bytes[j + 12];
            k4 = _x86Multiply(k4, c4);
            k4 = _x86Rotl(k4, 18);
            k4 = _x86Multiply(k4, c1);
            h4 ^= k4;
        case 12:
            k3 ^= bytes[j + 11] << 24;
        case 11:
            k3 ^= bytes[j + 10] << 16;
        case 10:
            k3 ^= bytes[j + 9] << 8;
        case 9:
            k3 ^= bytes[j + 8];
            k3 = _x86Multiply(k3, c3);
            k3 = _x86Rotl(k3, 17);
            k3 = _x86Multiply(k3, c4);
            h3 ^= k3;
        case 8:
            k2 ^= bytes[j + 7] << 24;
        case 7:
            k2 ^= bytes[j + 6] << 16;
        case 6:
            k2 ^= bytes[j + 5] << 8;
        case 5:
            k2 ^= bytes[j + 4];
            k2 = _x86Multiply(k2, c2);
            k2 = _x86Rotl(k2, 16);
            k2 = _x86Multiply(k2, c3);
            h2 ^= k2;
        case 4:
            k1 ^= bytes[j + 3] << 24;
        case 3:
            k1 ^= bytes[j + 2] << 16;
        case 2:
            k1 ^= bytes[j + 1] << 8;
        case 1:
            k1 ^= bytes[j];
            k1 = _x86Multiply(k1, c1);
            k1 = _x86Rotl(k1, 15);
            k1 = _x86Multiply(k1, c2);
            h1 ^= k1;
    }
    h1 ^= bytes.length;
    h2 ^= bytes.length;
    h3 ^= bytes.length;
    h4 ^= bytes.length;
    h1 += h2;
    h1 += h3;
    h1 += h4;
    h2 += h1;
    h3 += h1;
    h4 += h1;
    h1 = _x86Fmix(h1);
    h2 = _x86Fmix(h2);
    h3 = _x86Fmix(h3);
    h4 = _x86Fmix(h4);
    h1 += h2;
    h1 += h3;
    h1 += h4;
    h2 += h1;
    h3 += h1;
    h4 += h1;
    return (("00000000" + (h1 >>> 0).toString(16)).slice(-8) +
        ("00000000" + (h2 >>> 0).toString(16)).slice(-8) +
        ("00000000" + (h3 >>> 0).toString(16)).slice(-8) +
        ("00000000" + (h4 >>> 0).toString(16)).slice(-8));
}
function x64Hash128(bytes, seed) {
    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    seed = seed || 0;
    const remainder = bytes.length % 16;
    const blocks = bytes.length - remainder;
    let h1 = [0, seed];
    let h2 = [0, seed];
    let k1 = [0, 0];
    let k2 = [0, 0];
    const c1 = [0x87c37b91, 0x114253d5];
    const c2 = [0x4cf5ad43, 0x2745937f];
    let j = 0;
    for (let i = 0; i < blocks; i = i + 16) {
        k1 = [
            bytes[i + 4] | (bytes[i + 5] << 8) | (bytes[i + 6] << 16) | (bytes[i + 7] << 24),
            bytes[i] | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24)
        ];
        k2 = [
            bytes[i + 12] | (bytes[i + 13] << 8) | (bytes[i + 14] << 16) | (bytes[i + 15] << 24),
            bytes[i + 8] | (bytes[i + 9] << 8) | (bytes[i + 10] << 16) | (bytes[i + 11] << 24)
        ];
        k1 = _x64Multiply(k1, c1);
        k1 = _x64Rotl(k1, 31);
        k1 = _x64Multiply(k1, c2);
        h1 = _x64Xor(h1, k1);
        h1 = _x64Rotl(h1, 27);
        h1 = _x64Add(h1, h2);
        h1 = _x64Add(_x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = _x64Multiply(k2, c2);
        k2 = _x64Rotl(k2, 33);
        k2 = _x64Multiply(k2, c1);
        h2 = _x64Xor(h2, k2);
        h2 = _x64Rotl(h2, 31);
        h2 = _x64Add(h2, h1);
        h2 = _x64Add(_x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
        j = i + 16;
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
        case 15:
            k2 = _x64Xor(k2, _x64LeftShift([0, bytes[j + 14]], 48));
        case 14:
            k2 = _x64Xor(k2, _x64LeftShift([0, bytes[j + 13]], 40));
        case 13:
            k2 = _x64Xor(k2, _x64LeftShift([0, bytes[j + 12]], 32));
        case 12:
            k2 = _x64Xor(k2, _x64LeftShift([0, bytes[j + 11]], 24));
        case 11:
            k2 = _x64Xor(k2, _x64LeftShift([0, bytes[j + 10]], 16));
        case 10:
            k2 = _x64Xor(k2, _x64LeftShift([0, bytes[j + 9]], 8));
        case 9:
            k2 = _x64Xor(k2, [0, bytes[j + 8]]);
            k2 = _x64Multiply(k2, c2);
            k2 = _x64Rotl(k2, 33);
            k2 = _x64Multiply(k2, c1);
            h2 = _x64Xor(h2, k2);
        case 8:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 7]], 56));
        case 7:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 6]], 48));
        case 6:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 5]], 40));
        case 5:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 4]], 32));
        case 4:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 3]], 24));
        case 3:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 2]], 16));
        case 2:
            k1 = _x64Xor(k1, _x64LeftShift([0, bytes[j + 1]], 8));
        case 1:
            k1 = _x64Xor(k1, [0, bytes[j]]);
            k1 = _x64Multiply(k1, c1);
            k1 = _x64Rotl(k1, 31);
            k1 = _x64Multiply(k1, c2);
            h1 = _x64Xor(h1, k1);
    }
    h1 = _x64Xor(h1, [0, bytes.length]);
    h2 = _x64Xor(h2, [0, bytes.length]);
    h1 = _x64Add(h1, h2);
    h2 = _x64Add(h2, h1);
    h1 = _x64Fmix(h1);
    h2 = _x64Fmix(h2);
    h1 = _x64Add(h1, h2);
    h2 = _x64Add(h2, h1);
    // Here we reverse h1 and h2 in Cosmos
    // This is an implementation detail and not part of the public spec
    const h1Buff = Buffer.from(("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) +
        ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8), "hex");
    const h1Reversed = reverse(h1Buff).toString("hex");
    const h2Buff = Buffer.from(("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) +
        ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8), "hex");
    const h2Reversed = reverse(h2Buff).toString("hex");
    return h1Reversed + h2Reversed;
}
function reverse(buff) {
    const buffer = Buffer.allocUnsafe(buff.length);
    for (let i = 0, j = buff.length - 1; i <= j; ++i, --j) {
        buffer[i] = buff[j];
        buffer[j] = buff[i];
    }
    return buffer;
}
var MurmurHash = {
    version: "3.0.0",
    x86: {
        hash32: x86Hash32,
        hash128: x86Hash128
    },
    x64: {
        hash128: x64Hash128
    },
    inputValidation: true
};

// Copyright (c) Microsoft Corporation.
const MAX_STRING_CHARS = 100;
function hashV1PartitionKey(partitionKey) {
    const toHash = prefixKeyByType(partitionKey);
    const hash = MurmurHash.x86.hash32(toHash);
    const encodedJSBI = writeNumberForBinaryEncodingJSBI(hash);
    const encodedValue = encodeByType(partitionKey);
    return Buffer.concat([encodedJSBI, encodedValue])
        .toString("hex")
        .toUpperCase();
}
function prefixKeyByType(key) {
    let bytes;
    switch (typeof key) {
        case "string": {
            const truncated = key.substr(0, MAX_STRING_CHARS);
            bytes = Buffer.concat([
                Buffer.from(BytePrefix.String, "hex"),
                Buffer.from(truncated),
                Buffer.from(BytePrefix.Undefined, "hex")
            ]);
            return bytes;
        }
        case "number": {
            const numberBytes = doubleToByteArrayJSBI(key);
            bytes = Buffer.concat([Buffer.from(BytePrefix.Number, "hex"), numberBytes]);
            return bytes;
        }
        case "boolean": {
            const prefix = key ? BytePrefix.True : BytePrefix.False;
            return Buffer.from(prefix, "hex");
        }
        case "object": {
            if (key === null) {
                return Buffer.from(BytePrefix.Null, "hex");
            }
            return Buffer.from(BytePrefix.Undefined, "hex");
        }
        case "undefined": {
            return Buffer.from(BytePrefix.Undefined, "hex");
        }
        default:
            throw new Error(`Unexpected type: ${typeof key}`);
    }
}
function encodeByType(key) {
    switch (typeof key) {
        case "string": {
            const truncated = key.substr(0, MAX_STRING_CHARS);
            return writeStringForBinaryEncoding(truncated);
        }
        case "number": {
            const encodedJSBI = writeNumberForBinaryEncodingJSBI(key);
            return encodedJSBI;
        }
        case "boolean": {
            const prefix = key ? BytePrefix.True : BytePrefix.False;
            return Buffer.from(prefix, "hex");
        }
        case "object":
            if (key === null) {
                return Buffer.from(BytePrefix.Null, "hex");
            }
            return Buffer.from(BytePrefix.Undefined, "hex");
        case "undefined":
            return Buffer.from(BytePrefix.Undefined, "hex");
        default:
            throw new Error(`Unexpected type: ${typeof key}`);
    }
}

// Copyright (c) Microsoft Corporation.
function hashV2PartitionKey(partitionKey) {
    const toHash = prefixKeyByType$1(partitionKey);
    const hash = MurmurHash.x64.hash128(toHash);
    const reverseBuff = reverse$1(Buffer.from(hash, "hex"));
    reverseBuff[0] &= 0x3f;
    return reverseBuff.toString("hex").toUpperCase();
}
function prefixKeyByType$1(key) {
    let bytes;
    switch (typeof key) {
        case "string": {
            bytes = Buffer.concat([
                Buffer.from(BytePrefix.String, "hex"),
                Buffer.from(key),
                Buffer.from(BytePrefix.Infinity, "hex")
            ]);
            return bytes;
        }
        case "number": {
            const numberBytes = doubleToByteArrayJSBI(key);
            bytes = Buffer.concat([Buffer.from(BytePrefix.Number, "hex"), numberBytes]);
            return bytes;
        }
        case "boolean": {
            const prefix = key ? BytePrefix.True : BytePrefix.False;
            return Buffer.from(prefix, "hex");
        }
        case "object": {
            if (key === null) {
                return Buffer.from(BytePrefix.Null, "hex");
            }
            return Buffer.from(BytePrefix.Undefined, "hex");
        }
        case "undefined": {
            return Buffer.from(BytePrefix.Undefined, "hex");
        }
        default:
            throw new Error(`Unexpected type: ${typeof key}`);
    }
}
function reverse$1(buff) {
    const buffer = Buffer.allocUnsafe(buff.length);
    for (let i = 0, j = buff.length - 1; i <= j; ++i, --j) {
        buffer[i] = buff[j];
        buffer[j] = buff[i];
    }
    return buffer;
}

/**
 * @hidden
 */
function isChangeFeedOptions(options) {
    const optionsType = typeof options;
    return (options && !(optionsType === "string" || optionsType === "boolean" || optionsType === "number"));
}
/**
 * Operations for creating new items, and reading/querying all items
 *
 * @see {@link Item} for reading, replacing, or deleting an existing container; use `.item(id)`.
 */
class Items {
    /**
     * Create an instance of {@link Items} linked to the parent {@link Container}.
     * @param container - The parent container.
     * @hidden
     */
    constructor(container, clientContext) {
        this.container = container;
        this.clientContext = clientContext;
    }
    query(query, options = {}) {
        const path = getPathFromLink(this.container.url, ResourceType.item);
        const id = getIdFromLink(this.container.url);
        const fetchFunction = (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.item,
                resourceId: id,
                resultFn: (result) => (result ? result.Documents : []),
                query,
                options: innerOptions,
                partitionKey: options.partitionKey
            });
        };
        return new QueryIterator(this.clientContext, query, options, fetchFunction, this.container.url, ResourceType.item);
    }
    readChangeFeed(partitionKeyOrChangeFeedOptions, changeFeedOptions) {
        if (isChangeFeedOptions(partitionKeyOrChangeFeedOptions)) {
            return this.changeFeed(partitionKeyOrChangeFeedOptions);
        }
        else {
            return this.changeFeed(partitionKeyOrChangeFeedOptions, changeFeedOptions);
        }
    }
    changeFeed(partitionKeyOrChangeFeedOptions, changeFeedOptions) {
        let partitionKey;
        if (!changeFeedOptions && isChangeFeedOptions(partitionKeyOrChangeFeedOptions)) {
            partitionKey = undefined;
            changeFeedOptions = partitionKeyOrChangeFeedOptions;
        }
        else if (partitionKeyOrChangeFeedOptions !== undefined &&
            !isChangeFeedOptions(partitionKeyOrChangeFeedOptions)) {
            partitionKey = partitionKeyOrChangeFeedOptions;
        }
        if (!changeFeedOptions) {
            changeFeedOptions = {};
        }
        const path = getPathFromLink(this.container.url, ResourceType.item);
        const id = getIdFromLink(this.container.url);
        return new ChangeFeedIterator(this.clientContext, id, path, partitionKey, changeFeedOptions);
    }
    readAll(options) {
        return this.query("SELECT * from c", options);
    }
    /**
     * Create an item.
     *
     * Any provided type, T, is not necessarily enforced by the SDK.
     * You may get more or less properties and it's up to your logic to enforce it.
     *
     * There is no set schema for JSON items. They may contain any number of custom properties.
     *
     * @param body - Represents the body of the item. Can contain any number of user defined properties.
     * @param options - Used for modifying the request (for instance, specifying the partition key).
     */
    create(body, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            // Generate random document id if the id is missing in the payload and
            // options.disableAutomaticIdGeneration != true
            if ((body.id === undefined || body.id === "") && !options.disableAutomaticIdGeneration) {
                body.id = v4();
            }
            const { resource: partitionKeyDefinition } = yield this.container.readPartitionKeyDefinition();
            const partitionKey = extractPartitionKey(body, partitionKeyDefinition);
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.container.url, ResourceType.item);
            const id = getIdFromLink(this.container.url);
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.item,
                resourceId: id,
                options,
                partitionKey
            });
            const ref = new Item(this.container, response.result.id, partitionKey, this.clientContext);
            return new ItemResponse(response.result, response.headers, response.code, response.substatus, ref);
        });
    }
    upsert(body, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { resource: partitionKeyDefinition } = yield this.container.readPartitionKeyDefinition();
            const partitionKey = extractPartitionKey(body, partitionKeyDefinition);
            // Generate random document id if the id is missing in the payload and
            // options.disableAutomaticIdGeneration != true
            if ((body.id === undefined || body.id === "") && !options.disableAutomaticIdGeneration) {
                body.id = v4();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.container.url, ResourceType.item);
            const id = getIdFromLink(this.container.url);
            const response = yield this.clientContext.upsert({
                body,
                path,
                resourceType: ResourceType.item,
                resourceId: id,
                options,
                partitionKey
            });
            const ref = new Item(this.container, response.result.id, partitionKey, this.clientContext);
            return new ItemResponse(response.result, response.headers, response.code, response.substatus, ref);
        });
    }
    /**
     * Execute bulk operations on items.
     *
     * Bulk takes an array of Operations which are typed based on what the operation does.
     * The choices are: Create, Upsert, Read, Replace, and Delete
     *
     * Usage example:
     * ```typescript
     * // partitionKey is optional at the top level if present in the resourceBody
     * const operations: OperationInput[] = [
     *    {
     *       operationType: "Create",
     *       resourceBody: { id: "doc1", name: "sample", key: "A" }
     *    },
     *    {
     *       operationType: "Upsert",
     *       partitionKey: 'A',
     *       resourceBody: { id: "doc2", name: "other", key: "A" }
     *    }
     * ]
     *
     * await database.container.items.bulk(operations)
     * ```
     *
     * @param operations - List of operations. Limit 100
     * @param bulkOptions - Optional options object to modify bulk behavior. Pass \{ continueOnError: true \} to continue executing operations when one fails. (Defaults to false) ** NOTE: THIS WILL DEFAULT TO TRUE IN THE 4.0 RELEASE
     * @param options - Used for modifying the request.
     */
    bulk(operations, bulkOptions, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { resources: partitionKeyRanges } = yield this.container.readPartitionKeyRanges().fetchAll();
            const { resource: definition } = yield this.container.getPartitionKeyDefinition();
            const batches = partitionKeyRanges.map((keyRange) => {
                return {
                    min: keyRange.minInclusive,
                    max: keyRange.maxExclusive,
                    rangeId: keyRange.id,
                    indexes: [],
                    operations: []
                };
            });
            operations
                .map((operation) => decorateOperation(operation, definition))
                .forEach((operation, index) => {
                const partitionProp = definition.paths[0].replace("/", "");
                const isV2 = definition.version && definition.version === 2;
                const toHashKey = getPartitionKeyToHash(operation, partitionProp);
                const hashed = isV2 ? hashV2PartitionKey(toHashKey) : hashV1PartitionKey(toHashKey);
                const batchForKey = batches.find((batch) => {
                    return isKeyInRange(batch.min, batch.max, hashed);
                });
                batchForKey.operations.push(operation);
                batchForKey.indexes.push(index);
            });
            const path = getPathFromLink(this.container.url, ResourceType.item);
            const orderedResponses = [];
            yield Promise.all(batches
                .filter((batch) => batch.operations.length)
                .map((batch) => __awaiter(this, void 0, void 0, function* () {
                if (batch.operations.length > 100) {
                    throw new Error("Cannot run bulk request with more than 100 operations per partition");
                }
                try {
                    const response = yield this.clientContext.bulk({
                        body: batch.operations,
                        partitionKeyRangeId: batch.rangeId,
                        path,
                        resourceId: this.container.url,
                        bulkOptions,
                        options
                    });
                    response.result.forEach((operationResponse, index) => {
                        orderedResponses[batch.indexes[index]] = operationResponse;
                    });
                }
                catch (err) {
                    // In the case of 410 errors, we need to recompute the partition key ranges
                    // and redo the batch request, however, 410 errors occur for unsupported
                    // partition key types as well since we don't support them, so for now we throw
                    if (err.code === 410) {
                        throw new Error("Partition key error. Either the partitions have split or an operation has an unsupported partitionKey type");
                    }
                    throw new Error(`Bulk request errored with: ${err.message}`);
                }
            })));
            return orderedResponses;
        });
    }
}

class StoredProcedureResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, storedProcedure) {
        super(resource, headers, statusCode);
        this.storedProcedure = storedProcedure;
    }
    /**
     * Alias for storedProcedure.
     *
     * A reference to the {@link StoredProcedure} which the {@link StoredProcedureDefinition} corresponds to.
     */
    get sproc() {
        return this.storedProcedure;
    }
}

/**
 * Operations for reading, replacing, deleting, or executing a specific, existing stored procedure by id.
 *
 * For operations to create, upsert, read all, or query Stored Procedures,
 */
class StoredProcedure {
    /**
     * Creates a new instance of {@link StoredProcedure} linked to the parent {@link Container}.
     * @param container - The parent {@link Container}.
     * @param id - The id of the given {@link StoredProcedure}.
     * @hidden
     */
    constructor(container, id, clientContext) {
        this.container = container;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createStoredProcedureUri(this.container.database.id, this.container.id, this.id);
    }
    /**
     * Read the {@link StoredProcedureDefinition} for the given {@link StoredProcedure}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.sproc,
                resourceId: id,
                options
            });
            return new StoredProcedureResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Replace the given {@link StoredProcedure} with the specified {@link StoredProcedureDefinition}.
     * @param body - The specified {@link StoredProcedureDefinition} to replace the existing definition.
     */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.body) {
                body.body = body.body.toString();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.sproc,
                resourceId: id,
                options
            });
            return new StoredProcedureResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Delete the given {@link StoredProcedure}.
     */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.sproc,
                resourceId: id,
                options
            });
            return new StoredProcedureResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Execute the given {@link StoredProcedure}.
     *
     * The specified type, T, is not enforced by the client.
     * Be sure to validate the response from the stored procedure matches the type, T, you provide.
     *
     * @param partitionKey - The partition key to use when executing the stored procedure
     * @param params - Array of parameters to pass as arguments to the given {@link StoredProcedure}.
     * @param options - Additional options, such as the partition key to invoke the {@link StoredProcedure} on.
     */
    execute(partitionKey, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (partitionKey === undefined) {
                const { resource: partitionKeyDefinition } = yield this.container.readPartitionKeyDefinition();
                partitionKey = undefinedPartitionKey(partitionKeyDefinition);
            }
            const response = yield this.clientContext.execute({
                sprocLink: this.url,
                params,
                options,
                partitionKey
            });
            return new ResourceResponse(response.result, response.headers, response.code);
        });
    }
}

/**
 * Operations for creating, upserting, or reading/querying all Stored Procedures.
 *
 * For operations to read, replace, delete, or execute a specific, existing stored procedure by id, see `container.storedProcedure()`.
 */
class StoredProcedures {
    /**
     * @param container - The parent {@link Container}.
     * @hidden
     */
    constructor(container, clientContext) {
        this.container = container;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.container.url, ResourceType.sproc);
        const id = getIdFromLink(this.container.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.sproc,
                resourceId: id,
                resultFn: (result) => result.StoredProcedures,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Read all stored procedures.
     * @example Read all stored procedures to array.
     * ```typescript
     * const {body: sprocList} = await containers.storedProcedures.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
    /**
     * Create a StoredProcedure.
     *
     * Azure Cosmos DB allows stored procedures to be executed in the storage tier,
     * directly against an item container. The script
     * gets executed under ACID transactions on the primary storage partition of the
     * specified container. For additional details,
     * refer to the server-side JavaScript API documentation.
     */
    create(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.body) {
                body.body = body.body.toString();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.container.url, ResourceType.sproc);
            const id = getIdFromLink(this.container.url);
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.sproc,
                resourceId: id,
                options
            });
            const ref = new StoredProcedure(this.container, response.result.id, this.clientContext);
            return new StoredProcedureResponse(response.result, response.headers, response.code, ref);
        });
    }
}

class TriggerResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, trigger) {
        super(resource, headers, statusCode);
        this.trigger = trigger;
    }
}

/**
 * Operations to read, replace, or delete a {@link Trigger}.
 *
 * Use `container.triggers` to create, upsert, query, or read all.
 */
class Trigger {
    /**
     * @hidden
     * @param container - The parent {@link Container}.
     * @param id - The id of the given {@link Trigger}.
     */
    constructor(container, id, clientContext) {
        this.container = container;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createTriggerUri(this.container.database.id, this.container.id, this.id);
    }
    /**
     * Read the {@link TriggerDefinition} for the given {@link Trigger}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.trigger,
                resourceId: id,
                options
            });
            return new TriggerResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Replace the given {@link Trigger} with the specified {@link TriggerDefinition}.
     * @param body - The specified {@link TriggerDefinition} to replace the existing definition with.
     */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.body) {
                body.body = body.body.toString();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.trigger,
                resourceId: id,
                options
            });
            return new TriggerResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Delete the given {@link Trigger}.
     */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.trigger,
                resourceId: id,
                options
            });
            return new TriggerResponse(response.result, response.headers, response.code, this);
        });
    }
}

/**
 * Operations to create, upsert, query, and read all triggers.
 *
 * Use `container.triggers` to read, replace, or delete a {@link Trigger}.
 */
class Triggers {
    /**
     * @hidden
     * @param container - The parent {@link Container}.
     */
    constructor(container, clientContext) {
        this.container = container;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.container.url, ResourceType.trigger);
        const id = getIdFromLink(this.container.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.trigger,
                resourceId: id,
                resultFn: (result) => result.Triggers,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Read all Triggers.
     * @example Read all trigger to array.
     * ```typescript
     * const {body: triggerList} = await container.triggers.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
    /**
     * Create a trigger.
     *
     * Azure Cosmos DB supports pre and post triggers defined in JavaScript to be executed
     * on creates, updates and deletes.
     *
     * For additional details, refer to the server-side JavaScript API documentation.
     */
    create(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.body) {
                body.body = body.body.toString();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.container.url, ResourceType.trigger);
            const id = getIdFromLink(this.container.url);
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.trigger,
                resourceId: id,
                options
            });
            const ref = new Trigger(this.container, response.result.id, this.clientContext);
            return new TriggerResponse(response.result, response.headers, response.code, ref);
        });
    }
}

class UserDefinedFunctionResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, udf) {
        super(resource, headers, statusCode);
        this.userDefinedFunction = udf;
    }
    /**
     * Alias for `userDefinedFunction(id)`.
     *
     * A reference to the {@link UserDefinedFunction} corresponding to the returned {@link UserDefinedFunctionDefinition}.
     */
    get udf() {
        return this.userDefinedFunction;
    }
}

/**
 * Used to read, replace, or delete a specified User Definied Function by id.
 *
 * @see {@link UserDefinedFunction} to create, upsert, query, read all User Defined Functions.
 */
class UserDefinedFunction {
    /**
     * @hidden
     * @param container - The parent {@link Container}.
     * @param id - The id of the given {@link UserDefinedFunction}.
     */
    constructor(container, id, clientContext) {
        this.container = container;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createUserDefinedFunctionUri(this.container.database.id, this.container.id, this.id);
    }
    /**
     * Read the {@link UserDefinedFunctionDefinition} for the given {@link UserDefinedFunction}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.udf,
                resourceId: id,
                options
            });
            return new UserDefinedFunctionResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Replace the given {@link UserDefinedFunction} with the specified {@link UserDefinedFunctionDefinition}.
     * @param options -
     */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.body) {
                body.body = body.body.toString();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.udf,
                resourceId: id,
                options
            });
            return new UserDefinedFunctionResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Delete the given {@link UserDefined}.
     */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.udf,
                resourceId: id,
                options
            });
            return new UserDefinedFunctionResponse(response.result, response.headers, response.code, this);
        });
    }
}

/**
 * Used to create, upsert, query, or read all User Defined Functions.
 *
 * @see {@link UserDefinedFunction} to read, replace, or delete a given User Defined Function by id.
 */
class UserDefinedFunctions {
    /**
     * @hidden
     * @param container - The parent {@link Container}.
     */
    constructor(container, clientContext) {
        this.container = container;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.container.url, ResourceType.udf);
        const id = getIdFromLink(this.container.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.udf,
                resourceId: id,
                resultFn: (result) => result.UserDefinedFunctions,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Read all User Defined Functions.
     * @example Read all User Defined Functions to array.
     * ```typescript
     * const {body: udfList} = await container.userDefinedFunctions.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
    /**
     * Create a UserDefinedFunction.
     *
     * Azure Cosmos DB supports JavaScript UDFs which can be used inside queries, stored procedures and triggers.
     *
     * For additional details, refer to the server-side JavaScript API documentation.
     *
     */
    create(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.body) {
                body.body = body.body.toString();
            }
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.container.url, ResourceType.udf);
            const id = getIdFromLink(this.container.url);
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.udf,
                resourceId: id,
                options
            });
            const ref = new UserDefinedFunction(this.container, response.result.id, this.clientContext);
            return new UserDefinedFunctionResponse(response.result, response.headers, response.code, ref);
        });
    }
}

// Copyright (c) Microsoft Corporation.
class Scripts {
    /**
     * @param container - The parent {@link Container}.
     * @hidden
     */
    constructor(container, clientContext) {
        this.container = container;
        this.clientContext = clientContext;
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link StoredProcedure} by id.
     *
     * Use `.storedProcedures` for creating new stored procedures, or querying/reading all stored procedures.
     * @param id - The id of the {@link StoredProcedure}.
     */
    storedProcedure(id) {
        return new StoredProcedure(this.container, id, this.clientContext);
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link Trigger} by id.
     *
     * Use `.triggers` for creating new triggers, or querying/reading all triggers.
     * @param id - The id of the {@link Trigger}.
     */
    trigger(id) {
        return new Trigger(this.container, id, this.clientContext);
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link UserDefinedFunction} by id.
     *
     * Use `.userDefinedFunctions` for creating new user defined functions, or querying/reading all user defined functions.
     * @param id - The id of the {@link UserDefinedFunction}.
     */
    userDefinedFunction(id) {
        return new UserDefinedFunction(this.container, id, this.clientContext);
    }
    /**
     * Operations for creating new stored procedures, and reading/querying all stored procedures.
     *
     * For reading, replacing, or deleting an existing stored procedure, use `.storedProcedure(id)`.
     */
    get storedProcedures() {
        if (!this.$sprocs) {
            this.$sprocs = new StoredProcedures(this.container, this.clientContext);
        }
        return this.$sprocs;
    }
    /**
     * Operations for creating new triggers, and reading/querying all triggers.
     *
     * For reading, replacing, or deleting an existing trigger, use `.trigger(id)`.
     */
    get triggers() {
        if (!this.$triggers) {
            this.$triggers = new Triggers(this.container, this.clientContext);
        }
        return this.$triggers;
    }
    /**
     * Operations for creating new user defined functions, and reading/querying all user defined functions.
     *
     * For reading, replacing, or deleting an existing user defined function, use `.userDefinedFunction(id)`.
     */
    get userDefinedFunctions() {
        if (!this.$udfs) {
            this.$udfs = new UserDefinedFunctions(this.container, this.clientContext);
        }
        return this.$udfs;
    }
}

/** Response object for Container operations */
class ContainerResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, container) {
        super(resource, headers, statusCode);
        this.container = container;
    }
}

class OfferResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, offer) {
        super(resource, headers, statusCode);
        this.offer = offer;
    }
}

/**
 * Use to read or replace an existing {@link Offer} by id.
 *
 * @see {@link Offers} to query or read all offers.
 */
class Offer {
    /**
     * @hidden
     * @param client - The parent {@link CosmosClient} for the Database Account.
     * @param id - The id of the given {@link Offer}.
     */
    constructor(client, id, clientContext) {
        this.client = client;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return `/${Constants.Path.OffersPathSegment}/${this.id}`;
    }
    /**
     * Read the {@link OfferDefinition} for the given {@link Offer}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.clientContext.read({
                path: this.url,
                resourceType: ResourceType.offer,
                resourceId: this.id,
                options
            });
            return new OfferResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Replace the given {@link Offer} with the specified {@link OfferDefinition}.
     * @param body - The specified {@link OfferDefinition}
     */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const response = yield this.clientContext.replace({
                body,
                path: this.url,
                resourceType: ResourceType.offer,
                resourceId: this.id,
                options
            });
            return new OfferResponse(response.result, response.headers, response.code, this);
        });
    }
}

/**
 * Use to query or read all Offers.
 *
 * @see {@link Offer} to read or replace an existing {@link Offer} by id.
 */
class Offers {
    /**
     * @hidden
     * @param client - The parent {@link CosmosClient} for the offers.
     */
    constructor(client, clientContext) {
        this.client = client;
        this.clientContext = clientContext;
    }
    query(query, options) {
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path: "/offers",
                resourceType: ResourceType.offer,
                resourceId: "",
                resultFn: (result) => result.Offers,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Read all offers.
     * @example Read all offers to array.
     * ```typescript
     * const {body: offerList} = await client.offers.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
}

/**
 * Operations for reading, replacing, or deleting a specific, existing container by id.
 *
 * @see {@link Containers} for creating new containers, and reading/querying all containers; use `.containers`.
 *
 * Note: all these operations make calls against a fixed budget.
 * You should design your system such that these calls scale sublinearly with your application.
 * For instance, do not call `container(id).read()` before every single `item.read()` call, to ensure the container exists;
 * do this once on application start up.
 */
class Container {
    /**
     * Returns a container instance. Note: You should get this from `database.container(id)`, rather than creating your own object.
     * @param database - The parent {@link Database}.
     * @param id - The id of the given container.
     * @hidden
     */
    constructor(database, id, clientContext) {
        this.database = database;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Operations for creating new items, and reading/querying all items
     *
     * For reading, replacing, or deleting an existing item, use `.item(id)`.
     *
     * @example Create a new item
     * ```typescript
     * const {body: createdItem} = await container.items.create({id: "<item id>", properties: {}});
     * ```
     */
    get items() {
        if (!this.$items) {
            this.$items = new Items(this, this.clientContext);
        }
        return this.$items;
    }
    /**
     * All operations for Stored Procedures, Triggers, and User Defined Functions
     */
    get scripts() {
        if (!this.$scripts) {
            this.$scripts = new Scripts(this, this.clientContext);
        }
        return this.$scripts;
    }
    /**
     * Opertaions for reading and querying conflicts for the given container.
     *
     * For reading or deleting a specific conflict, use `.conflict(id)`.
     */
    get conflicts() {
        if (!this.$conflicts) {
            this.$conflicts = new Conflicts(this, this.clientContext);
        }
        return this.$conflicts;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createDocumentCollectionUri(this.database.id, this.id);
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link Item} by id.
     *
     * Use `.items` for creating new items, or querying/reading all items.
     *
     * @param id - The id of the {@link Item}.
     * @param partitionKeyValue - The value of the {@link Item} partition key
     * @example Replace an item
     * `const {body: replacedItem} = await container.item("<item id>", "<partition key value>").replace({id: "<item id>", title: "Updated post", authorID: 5});`
     */
    item(id, partitionKeyValue) {
        return new Item(this, id, partitionKeyValue, this.clientContext);
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link Conflict} by id.
     *
     * Use `.conflicts` for creating new conflicts, or querying/reading all conflicts.
     * @param id - The id of the {@link Conflict}.
     */
    conflict(id) {
        return new Conflict(this, id, this.clientContext);
    }
    /** Read the container's definition */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.container,
                resourceId: id,
                options
            });
            this.clientContext.partitionKeyDefinitionCache[this.url] = response.result.partitionKey;
            return new ContainerResponse(response.result, response.headers, response.code, this);
        });
    }
    /** Replace the container's definition */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.container,
                resourceId: id,
                options
            });
            return new ContainerResponse(response.result, response.headers, response.code, this);
        });
    }
    /** Delete the container */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.container,
                resourceId: id,
                options
            });
            return new ContainerResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Gets the partition key definition first by looking into the cache otherwise by reading the collection.
     * @deprecated This method has been renamed to readPartitionKeyDefinition.
     */
    getPartitionKeyDefinition() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.readPartitionKeyDefinition();
        });
    }
    /**
     * Gets the partition key definition first by looking into the cache otherwise by reading the collection.
     * @hidden
     */
    readPartitionKeyDefinition() {
        return __awaiter(this, void 0, void 0, function* () {
            // $ISSUE-felixfan-2016-03-17: Make name based path and link based path use the same key
            // $ISSUE-felixfan-2016-03-17: Refresh partitionKeyDefinitionCache when necessary
            if (this.url in this.clientContext.partitionKeyDefinitionCache) {
                return new ResourceResponse(this.clientContext.partitionKeyDefinitionCache[this.url], {}, 0);
            }
            const { headers, statusCode } = yield this.read();
            return new ResourceResponse(this.clientContext.partitionKeyDefinitionCache[this.url], headers, statusCode);
        });
    }
    /**
     * Gets offer on container. If none exists, returns an OfferResponse with undefined.
     */
    readOffer(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { resource: container } = yield this.read();
            const path = "/offers";
            const url = container._self;
            const response = yield this.clientContext.queryFeed({
                path,
                resourceId: "",
                resourceType: ResourceType.offer,
                query: `SELECT * from root where root.resource = "${url}"`,
                resultFn: (result) => result.Offers,
                options
            });
            const offer = response.result[0]
                ? new Offer(this.database.client, response.result[0].id, this.clientContext)
                : undefined;
            return new OfferResponse(response.result[0], response.headers, response.code, offer);
        });
    }
    getQueryPlan(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            return this.clientContext.getQueryPlan(path + "/docs", ResourceType.item, getIdFromLink(this.url), query);
        });
    }
    readPartitionKeyRanges(feedOptions) {
        feedOptions = feedOptions || {};
        return this.clientContext.queryPartitionKeyRanges(this.url, undefined, feedOptions);
    }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function validateOffer(body) {
    if (body.throughput) {
        if (body.maxThroughput) {
            console.log("should be erroring");
            throw new Error("Cannot specify `throughput` with `maxThroughput`");
        }
        if (body.autoUpgradePolicy) {
            throw new Error("Cannot specify autoUpgradePolicy with throughput. Use `maxThroughput` instead");
        }
    }
}

/**
 * Operations for creating new containers, and reading/querying all containers
 *
 * @see {@link Container} for reading, replacing, or deleting an existing container; use `.container(id)`.
 *
 * Note: all these operations make calls against a fixed budget.
 * You should design your system such that these calls scale sublinearly with your application.
 * For instance, do not call `containers.readAll()` before every single `item.read()` call, to ensure the container exists;
 * do this once on application start up.
 */
class Containers {
    constructor(database, clientContext) {
        this.database = database;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.database.url, ResourceType.container);
        const id = getIdFromLink(this.database.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.container,
                resourceId: id,
                resultFn: (result) => result.DocumentCollections,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Creates a container.
     *
     * A container is a named logical container for items.
     *
     * A database may contain zero or more named containers and each container consists of
     * zero or more JSON items.
     *
     * Being schema-free, the items in a container do not need to share the same structure or fields.
     *
     *
     * Since containers are application resources, they can be authorized using either the
     * master key or resource keys.
     *
     * @param body - Represents the body of the container.
     * @param options - Use to set options like response page size, continuation tokens, etc.
     */
    create(body, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.database.url, ResourceType.container);
            const id = getIdFromLink(this.database.url);
            validateOffer(body);
            if (body.maxThroughput) {
                const autoscaleParams = {
                    maxThroughput: body.maxThroughput
                };
                if (body.autoUpgradePolicy) {
                    autoscaleParams.autoUpgradePolicy = body.autoUpgradePolicy;
                }
                const autoscaleHeader = JSON.stringify(autoscaleParams);
                options.initialHeaders = Object.assign({}, options.initialHeaders, {
                    [Constants.HttpHeaders.AutoscaleSettings]: autoscaleHeader
                });
                delete body.maxThroughput;
                delete body.autoUpgradePolicy;
            }
            if (body.throughput) {
                options.initialHeaders = Object.assign({}, options.initialHeaders, {
                    [Constants.HttpHeaders.OfferThroughput]: body.throughput
                });
                delete body.throughput;
            }
            if (typeof body.partitionKey === "string") {
                if (!body.partitionKey.startsWith("/")) {
                    throw new Error("Partition key must start with '/'");
                }
                body.partitionKey = {
                    paths: [body.partitionKey]
                };
            }
            // If they don't specify a partition key, use the default path
            if (!body.partitionKey || !body.partitionKey.paths) {
                body.partitionKey = {
                    paths: [DEFAULT_PARTITION_KEY_PATH]
                };
            }
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.container,
                resourceId: id,
                options
            });
            const ref = new Container(this.database, response.result.id, this.clientContext);
            return new ContainerResponse(response.result, response.headers, response.code, ref);
        });
    }
    /**
     * Checks if a Container exists, and, if it doesn't, creates it.
     * This will make a read operation based on the id in the `body`, then if it is not found, a create operation.
     * You should confirm that the output matches the body you passed in for non-default properties (i.e. indexing policy/etc.)
     *
     * A container is a named logical container for items.
     *
     * A database may contain zero or more named containers and each container consists of
     * zero or more JSON items.
     *
     * Being schema-free, the items in a container do not need to share the same structure or fields.
     *
     *
     * Since containers are application resources, they can be authorized using either the
     * master key or resource keys.
     *
     * @param body - Represents the body of the container.
     * @param options - Use to set options like response page size, continuation tokens, etc.
     */
    createIfNotExists(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!body || body.id === null || body.id === undefined) {
                throw new Error("body parameter must be an object with an id property");
            }
            /*
              1. Attempt to read the Container (based on an assumption that most containers will already exist, so its faster)
              2. If it fails with NotFound error, attempt to create the container. Else, return the read results.
            */
            try {
                const readResponse = yield this.database.container(body.id).read(options);
                return readResponse;
            }
            catch (err) {
                if (err.code === StatusCodes.NotFound) {
                    const createResponse = yield this.create(body, options);
                    // Must merge the headers to capture RU costskaty
                    mergeHeaders(createResponse.headers, err.headers);
                    return createResponse;
                }
                else {
                    throw err;
                }
            }
        });
    }
    /**
     * Read all containers.
     * @param options - Use to set options like response page size, continuation tokens, etc.
     * @returns {@link QueryIterator} Allows you to return all containers in an array or iterate over them one at a time.
     * @example Read all containers to array.
     * ```typescript
     * const {body: containerList} = await client.database("<db id>").containers.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
}

class PermissionResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, permission) {
        super(resource, headers, statusCode);
        this.permission = permission;
    }
}

/**
 * Use to read, replace, or delete a given {@link Permission} by id.
 *
 * @see {@link Permissions} to create, upsert, query, or read all Permissions.
 */
class Permission {
    /**
     * @hidden
     * @param user - The parent {@link User}.
     * @param id - The id of the given {@link Permission}.
     */
    constructor(user, id, clientContext) {
        this.user = user;
        this.id = id;
        this.clientContext = clientContext;
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createPermissionUri(this.user.database.id, this.user.id, this.id);
    }
    /**
     * Read the {@link PermissionDefinition} of the given {@link Permission}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.permission,
                resourceId: id,
                options
            });
            return new PermissionResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Replace the given {@link Permission} with the specified {@link PermissionDefinition}.
     * @param body - The specified {@link PermissionDefinition}.
     */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.permission,
                resourceId: id,
                options
            });
            return new PermissionResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Delete the given {@link Permission}.
     */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.permission,
                resourceId: id,
                options
            });
            return new PermissionResponse(response.result, response.headers, response.code, this);
        });
    }
}

/**
 * Use to create, replace, query, and read all Permissions.
 *
 * @see {@link Permission} to read, replace, or delete a specific permission by id.
 */
class Permissions {
    /**
     * @hidden
     * @param user - The parent {@link User}.
     */
    constructor(user, clientContext) {
        this.user = user;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.user.url, ResourceType.permission);
        const id = getIdFromLink(this.user.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.permission,
                resourceId: id,
                resultFn: (result) => result.Permissions,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Read all permissions.
     * @example Read all permissions to array.
     * ```typescript
     * const {body: permissionList} = await user.permissions.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
    /**
     * Create a permission.
     *
     * A permission represents a per-User Permission to access a specific resource
     * e.g. Item or Container.
     * @param body - Represents the body of the permission.
     */
    create(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.user.url, ResourceType.permission);
            const id = getIdFromLink(this.user.url);
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.permission,
                resourceId: id,
                options
            });
            const ref = new Permission(this.user, response.result.id, this.clientContext);
            return new PermissionResponse(response.result, response.headers, response.code, ref);
        });
    }
    /**
     * Upsert a permission.
     *
     * A permission represents a per-User Permission to access a
     * specific resource e.g. Item or Container.
     */
    upsert(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.user.url, ResourceType.permission);
            const id = getIdFromLink(this.user.url);
            const response = yield this.clientContext.upsert({
                body,
                path,
                resourceType: ResourceType.permission,
                resourceId: id,
                options
            });
            const ref = new Permission(this.user, response.result.id, this.clientContext);
            return new PermissionResponse(response.result, response.headers, response.code, ref);
        });
    }
}

class UserResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, user) {
        super(resource, headers, statusCode);
        this.user = user;
    }
}

/**
 * Used to read, replace, and delete Users.
 *
 * Additionally, you can access the permissions for a given user via `user.permission` and `user.permissions`.
 *
 * @see {@link Users} to create, upsert, query, or read all.
 */
class User {
    /**
     * @hidden
     * @param database - The parent {@link Database}.
     */
    constructor(database, id, clientContext) {
        this.database = database;
        this.id = id;
        this.clientContext = clientContext;
        this.permissions = new Permissions(this, this.clientContext);
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createUserUri(this.database.id, this.id);
    }
    /**
     * Operations to read, replace, or delete a specific Permission by id.
     *
     * See `client.permissions` for creating, upserting, querying, or reading all operations.
     */
    permission(id) {
        return new Permission(this, id, this.clientContext);
    }
    /**
     * Read the {@link UserDefinition} for the given {@link User}.
     */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                options
            });
            return new UserResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Replace the given {@link User}'s definition with the specified {@link UserDefinition}.
     * @param body - The specified {@link UserDefinition} to replace the definition.
     */
    replace(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.replace({
                body,
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                options
            });
            return new UserResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Delete the given {@link User}.
     */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                options
            });
            return new UserResponse(response.result, response.headers, response.code, this);
        });
    }
}

/**
 * Used to create, upsert, query, and read all users.
 *
 * @see {@link User} to read, replace, or delete a specific User by id.
 */
class Users {
    /**
     * @hidden
     * @param database - The parent {@link Database}.
     */
    constructor(database, clientContext) {
        this.database = database;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const path = getPathFromLink(this.database.url, ResourceType.user);
        const id = getIdFromLink(this.database.url);
        return new QueryIterator(this.clientContext, query, options, (innerOptions) => {
            return this.clientContext.queryFeed({
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                resultFn: (result) => result.Users,
                query,
                options: innerOptions
            });
        });
    }
    /**
     * Read all users.-
     * @example Read all users to array.
     * ```typescript
     * const {body: usersList} = await database.users.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
    /**
     * Create a database user with the specified {@link UserDefinition}.
     * @param body - The specified {@link UserDefinition}.
     */
    create(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.database.url, ResourceType.user);
            const id = getIdFromLink(this.database.url);
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                options
            });
            const ref = new User(this.database, response.result.id, this.clientContext);
            return new UserResponse(response.result, response.headers, response.code, ref);
        });
    }
    /**
     * Upsert a database user with a specified {@link UserDefinition}.
     * @param body - The specified {@link UserDefinition}.
     */
    upsert(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            const path = getPathFromLink(this.database.url, ResourceType.user);
            const id = getIdFromLink(this.database.url);
            const response = yield this.clientContext.upsert({
                body,
                path,
                resourceType: ResourceType.user,
                resourceId: id,
                options
            });
            const ref = new User(this.database, response.result.id, this.clientContext);
            return new UserResponse(response.result, response.headers, response.code, ref);
        });
    }
}

/** Response object for Database operations */
class DatabaseResponse extends ResourceResponse {
    constructor(resource, headers, statusCode, database) {
        super(resource, headers, statusCode);
        this.database = database;
    }
}

/**
 * Operations for reading or deleting an existing database.
 *
 * @see {@link Databases} for creating new databases, and reading/querying all databases; use `client.databases`.
 *
 * Note: all these operations make calls against a fixed budget.
 * You should design your system such that these calls scale sublinearly with your application.
 * For instance, do not call `database.read()` before every single `item.read()` call, to ensure the database exists;
 * do this once on application start up.
 */
class Database {
    /** Returns a new {@link Database} instance.
     *
     * Note: the intention is to get this object from {@link CosmosClient} via `client.database(id)`, not to instantiate it yourself.
     */
    constructor(client, id, clientContext) {
        this.client = client;
        this.id = id;
        this.clientContext = clientContext;
        this.containers = new Containers(this, this.clientContext);
        this.users = new Users(this, this.clientContext);
    }
    /**
     * Returns a reference URL to the resource. Used for linking in Permissions.
     */
    get url() {
        return createDatabaseUri(this.id);
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link Database} by id.
     *
     * Use `.containers` creating new containers, or querying/reading all containers.
     *
     * @example Delete a container
     * ```typescript
     * await client.database("<db id>").container("<container id>").delete();
     * ```
     */
    container(id) {
        return new Container(this, id, this.clientContext);
    }
    /**
     * Used to read, replace, or delete a specific, existing {@link User} by id.
     *
     * Use `.users` for creating new users, or querying/reading all users.
     */
    user(id) {
        return new User(this, id, this.clientContext);
    }
    /** Read the definition of the given Database. */
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.read({
                path,
                resourceType: ResourceType.database,
                resourceId: id,
                options
            });
            return new DatabaseResponse(response.result, response.headers, response.code, this);
        });
    }
    /** Delete the given Database. */
    delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = getPathFromLink(this.url);
            const id = getIdFromLink(this.url);
            const response = yield this.clientContext.delete({
                path,
                resourceType: ResourceType.database,
                resourceId: id,
                options
            });
            return new DatabaseResponse(response.result, response.headers, response.code, this);
        });
    }
    /**
     * Gets offer on database. If none exists, returns an OfferResponse with undefined.
     */
    readOffer(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { resource: record } = yield this.read();
            const path = "/offers";
            const url = record._self;
            const response = yield this.clientContext.queryFeed({
                path,
                resourceId: "",
                resourceType: ResourceType.offer,
                query: `SELECT * from root where root.resource = "${url}"`,
                resultFn: (result) => result.Offers,
                options
            });
            const offer = response.result[0]
                ? new Offer(this.client, response.result[0].id, this.clientContext)
                : undefined;
            return new OfferResponse(response.result[0], response.headers, response.code, offer);
        });
    }
}

/**
 * Operations for creating new databases, and reading/querying all databases
 *
 * @see {@link Database} for reading or deleting an existing database; use `client.database(id)`.
 *
 * Note: all these operations make calls against a fixed budget.
 * You should design your system such that these calls scale sublinearly with your application.
 * For instance, do not call `databases.readAll()` before every single `item.read()` call, to ensure the database exists;
 * do this once on application start up.
 */
class Databases {
    /**
     * @hidden
     * @param client - The parent {@link CosmosClient} for the Database.
     */
    constructor(client, clientContext) {
        this.client = client;
        this.clientContext = clientContext;
    }
    query(query, options) {
        const cb = (innerOptions) => {
            return this.clientContext.queryFeed({
                path: "/dbs",
                resourceType: ResourceType.database,
                resourceId: "",
                resultFn: (result) => result.Databases,
                query,
                options: innerOptions
            });
        };
        return new QueryIterator(this.clientContext, query, options, cb);
    }
    /**
     * Send a request for creating a database.
     *
     * A database manages users, permissions and a set of containers.
     * Each Azure Cosmos DB Database Account is able to support multiple independent named databases,
     * with the database being the logical container for data.
     *
     * Each Database consists of one or more containers, each of which in turn contain one or more
     * documents. Since databases are an administrative resource, the Service Master Key will be
     * required in order to access and successfully complete any action using the User APIs.
     *
     * @param body - The {@link DatabaseDefinition} that represents the {@link Database} to be created.
     * @param options - Use to set options like response page size, continuation tokens, etc.
     */
    create(body, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = {};
            if (!isResourceValid(body, err)) {
                throw err;
            }
            validateOffer(body);
            if (body.maxThroughput) {
                const autoscaleParams = {
                    maxThroughput: body.maxThroughput
                };
                if (body.autoUpgradePolicy) {
                    autoscaleParams.autoUpgradePolicy = body.autoUpgradePolicy;
                }
                const autoscaleHeaders = JSON.stringify(autoscaleParams);
                options.initialHeaders = Object.assign({}, options.initialHeaders, {
                    [Constants.HttpHeaders.AutoscaleSettings]: autoscaleHeaders
                });
                delete body.maxThroughput;
                delete body.autoUpgradePolicy;
            }
            if (body.throughput) {
                options.initialHeaders = Object.assign({}, options.initialHeaders, {
                    [Constants.HttpHeaders.OfferThroughput]: body.throughput
                });
                delete body.throughput;
            }
            const path = "/dbs"; // TODO: constant
            const response = yield this.clientContext.create({
                body,
                path,
                resourceType: ResourceType.database,
                resourceId: undefined,
                options
            });
            const ref = new Database(this.client, body.id, this.clientContext);
            return new DatabaseResponse(response.result, response.headers, response.code, ref);
        });
    }
    /**
     * Check if a database exists, and if it doesn't, create it.
     * This will make a read operation based on the id in the `body`, then if it is not found, a create operation.
     *
     * A database manages users, permissions and a set of containers.
     * Each Azure Cosmos DB Database Account is able to support multiple independent named databases,
     * with the database being the logical container for data.
     *
     * Each Database consists of one or more containers, each of which in turn contain one or more
     * documents. Since databases are an an administrative resource, the Service Master Key will be
     * required in order to access and successfully complete any action using the User APIs.
     *
     * @param body - The {@link DatabaseDefinition} that represents the {@link Database} to be created.
     * @param options - Additional options for the request
     */
    createIfNotExists(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!body || body.id === null || body.id === undefined) {
                throw new Error("body parameter must be an object with an id property");
            }
            /*
              1. Attempt to read the Database (based on an assumption that most databases will already exist, so its faster)
              2. If it fails with NotFound error, attempt to create the db. Else, return the read results.
            */
            try {
                const readResponse = yield this.client.database(body.id).read(options);
                return readResponse;
            }
            catch (err) {
                if (err.code === StatusCodes.NotFound) {
                    const createResponse = yield this.create(body, options);
                    // Must merge the headers to capture RU costskaty
                    mergeHeaders(createResponse.headers, err.headers);
                    return createResponse;
                }
                else {
                    throw err;
                }
            }
        });
    }
    // TODO: DatabaseResponse for QueryIterator?
    /**
     * Reads all databases.
     * @param options - Use to set options like response page size, continuation tokens, etc.
     * @returns {@link QueryIterator} Allows you to return all databases in an array or iterate over them one at a time.
     * @example Read all databases to array.
     * ```typescript
     * const {body: databaseList} = await client.databases.readAll().fetchAll();
     * ```
     */
    readAll(options) {
        return this.query(undefined, options);
    }
}

/**
 * Used to specify which type of events to execute this plug in on.
 *
 * @hidden
 */
var PluginOn;
(function (PluginOn) {
    /**
     * Will be executed per network request
     */
    PluginOn["request"] = "request";
    /**
     * Will be executed per API operation
     */
    PluginOn["operation"] = "operation";
})(PluginOn || (PluginOn = {}));
/**
 * @internal
 */
function executePlugins(requestContext, next, on) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!requestContext.plugins) {
            return next(requestContext, undefined);
        }
        let level = 0;
        const _ = (inner) => {
            if (++level >= inner.plugins.length) {
                return next(requestContext, undefined);
            }
            else if (inner.plugins[level].on !== on) {
                return _(requestContext);
            }
            else {
                return inner.plugins[level].plugin(inner, _);
            }
        };
        if (requestContext.plugins[level].on !== on) {
            return _(requestContext);
        }
        else {
            return requestContext.plugins[level].plugin(requestContext, _);
        }
    });
}

// ----------------------------------------------------------------------------
// Utility methods
//
/** @hidden */
function javaScriptFriendlyJSONStringify(s) {
    // two line terminators (Line separator and Paragraph separator) are not needed to be escaped in JSON
    // but are needed to be escaped in JavaScript.
    return JSON.stringify(s)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
}
/** @hidden */
function bodyFromData(data) {
    if (typeof data === "object") {
        return javaScriptFriendlyJSONStringify(data);
    }
    return data;
}
const JsonContentType = "application/json";
/**
 * @hidden
 */
function getHeaders({ clientOptions, defaultHeaders, verb, path, resourceId, resourceType, options = {}, partitionKeyRangeId, useMultipleWriteLocations, partitionKey }) {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = Object.assign({ [Constants.HttpHeaders.ResponseContinuationTokenLimitInKB]: 1, [Constants.HttpHeaders.EnableCrossPartitionQuery]: true }, defaultHeaders);
        if (useMultipleWriteLocations) {
            headers[Constants.HttpHeaders.ALLOW_MULTIPLE_WRITES] = true;
        }
        if (options.continuationTokenLimitInKB) {
            headers[Constants.HttpHeaders.ResponseContinuationTokenLimitInKB] =
                options.continuationTokenLimitInKB;
        }
        if (options.continuationToken) {
            headers[Constants.HttpHeaders.Continuation] = options.continuationToken;
        }
        else if (options.continuation) {
            headers[Constants.HttpHeaders.Continuation] = options.continuation;
        }
        if (options.preTriggerInclude) {
            headers[Constants.HttpHeaders.PreTriggerInclude] =
                options.preTriggerInclude.constructor === Array
                    ? options.preTriggerInclude.join(",")
                    : options.preTriggerInclude;
        }
        if (options.postTriggerInclude) {
            headers[Constants.HttpHeaders.PostTriggerInclude] =
                options.postTriggerInclude.constructor === Array
                    ? options.postTriggerInclude.join(",")
                    : options.postTriggerInclude;
        }
        if (options.offerType) {
            headers[Constants.HttpHeaders.OfferType] = options.offerType;
        }
        if (options.offerThroughput) {
            headers[Constants.HttpHeaders.OfferThroughput] = options.offerThroughput;
        }
        if (options.maxItemCount) {
            headers[Constants.HttpHeaders.PageSize] = options.maxItemCount;
        }
        if (options.accessCondition) {
            if (options.accessCondition.type === "IfMatch") {
                headers[Constants.HttpHeaders.IfMatch] = options.accessCondition.condition;
            }
            else {
                headers[Constants.HttpHeaders.IfNoneMatch] = options.accessCondition.condition;
            }
        }
        if (options.useIncrementalFeed) {
            headers[Constants.HttpHeaders.A_IM] = "Incremental Feed";
        }
        if (options.indexingDirective) {
            headers[Constants.HttpHeaders.IndexingDirective] = options.indexingDirective;
        }
        if (options.consistencyLevel) {
            headers[Constants.HttpHeaders.ConsistencyLevel] = options.consistencyLevel;
        }
        if (options.resourceTokenExpirySeconds) {
            headers[Constants.HttpHeaders.ResourceTokenExpiry] = options.resourceTokenExpirySeconds;
        }
        if (options.sessionToken) {
            headers[Constants.HttpHeaders.SessionToken] = options.sessionToken;
        }
        if (options.enableScanInQuery) {
            headers[Constants.HttpHeaders.EnableScanInQuery] = options.enableScanInQuery;
        }
        if (options.populateQuotaInfo) {
            headers[Constants.HttpHeaders.PopulateQuotaInfo] = options.populateQuotaInfo;
        }
        if (options.populateQueryMetrics) {
            headers[Constants.HttpHeaders.PopulateQueryMetrics] = options.populateQueryMetrics;
        }
        if (options.maxDegreeOfParallelism !== undefined) {
            headers[Constants.HttpHeaders.ParallelizeCrossPartitionQuery] = true;
        }
        if (options.populateQuotaInfo) {
            headers[Constants.HttpHeaders.PopulateQuotaInfo] = true;
        }
        if (partitionKey !== undefined && !headers[Constants.HttpHeaders.PartitionKey]) {
            if (partitionKey === null || !Array.isArray(partitionKey)) {
                partitionKey = [partitionKey];
            }
            headers[Constants.HttpHeaders.PartitionKey] = jsonStringifyAndEscapeNonASCII(partitionKey);
        }
        if (clientOptions.key || clientOptions.tokenProvider) {
            headers[Constants.HttpHeaders.XDate] = new Date().toUTCString();
        }
        if (verb === HTTPMethod.post || verb === HTTPMethod.put) {
            if (!headers[Constants.HttpHeaders.ContentType]) {
                headers[Constants.HttpHeaders.ContentType] = JsonContentType;
            }
        }
        if (!headers[Constants.HttpHeaders.Accept]) {
            headers[Constants.HttpHeaders.Accept] = JsonContentType;
        }
        if (partitionKeyRangeId !== undefined) {
            headers[Constants.HttpHeaders.PartitionKeyRangeID] = partitionKeyRangeId;
        }
        if (options.enableScriptLogging) {
            headers[Constants.HttpHeaders.EnableScriptLogging] = options.enableScriptLogging;
        }
        if (options.disableRUPerMinuteUsage) {
            headers[Constants.HttpHeaders.DisableRUPerMinuteUsage] = true;
        }
        if (clientOptions.key ||
            clientOptions.resourceTokens ||
            clientOptions.tokenProvider ||
            clientOptions.permissionFeed ||
            clientOptions.aadCredentials) {
            yield setAuthorizationHeader(clientOptions, verb, path, resourceId, resourceType, headers);
        }
        return headers;
    });
}

const _global =
  typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    : /* otherwise */ undefined;

if (!_global) {
  throw new Error(
    `Unable to find global scope. Are you sure this is running in the browser?`
  )
}

if (!_global.AbortController) {
  throw new Error(
    `Could not find "AbortController" in the global scope. You need to polyfill it first`
  )
}

var browser$1 = _global.AbortController;
var _default = _global.AbortController;
browser$1.default = _default;

// native patch for: node-fetch, whatwg-fetch
// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
var global = getGlobal();
var fetch = global.fetch.bind(global);
global.Headers;
global.Request;
global.Response;

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * @hidden
 */
const TimeoutErrorCode = "TimeoutError";
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.code = TimeoutErrorCode;
        this.name = TimeoutErrorCode;
    }
}

/**
 * @hidden
 */
// Windows Socket Error Codes
const WindowsInterruptedFunctionCall = 10004;
/**
 * @hidden
 */
const WindowsFileHandleNotValid = 10009;
/**
 * @hidden
 */
const WindowsPermissionDenied = 10013;
/**
 * @hidden
 */
const WindowsBadAddress = 10014;
/**
 * @hidden
 */
const WindowsInvalidArgumnet = 10022;
/**
 * @hidden
 */
const WindowsResourceTemporarilyUnavailable = 10035;
/**
 * @hidden
 */
const WindowsOperationNowInProgress = 10036;
/**
 * @hidden
 */
const WindowsAddressAlreadyInUse = 10048;
/**
 * @hidden
 */
const WindowsConnectionResetByPeer = 10054;
/**
 * @hidden
 */
const WindowsCannotSendAfterSocketShutdown = 10058;
/**
 * @hidden
 */
const WindowsConnectionTimedOut = 10060;
/**
 * @hidden
 */
const WindowsConnectionRefused = 10061;
/**
 * @hidden
 */
const WindowsNameTooLong = 10063;
/**
 * @hidden
 */
const WindowsHostIsDown = 10064;
/**
 * @hidden
 */
const WindowsNoRouteTohost = 10065;
/**
 * @hidden
 */
// Linux Error Codes
/**
 * @hidden
 */
const LinuxConnectionReset = "ECONNRESET";
// Node Error Codes
/**
 * @hidden
 */
const BrokenPipe = "EPIPE";
/**
 * @hidden
 */
const CONNECTION_ERROR_CODES = [
    WindowsInterruptedFunctionCall,
    WindowsFileHandleNotValid,
    WindowsPermissionDenied,
    WindowsBadAddress,
    WindowsInvalidArgumnet,
    WindowsResourceTemporarilyUnavailable,
    WindowsOperationNowInProgress,
    WindowsAddressAlreadyInUse,
    WindowsConnectionResetByPeer,
    WindowsCannotSendAfterSocketShutdown,
    WindowsConnectionTimedOut,
    WindowsConnectionRefused,
    WindowsNameTooLong,
    WindowsHostIsDown,
    WindowsNoRouteTohost,
    LinuxConnectionReset,
    TimeoutErrorCode,
    BrokenPipe
];
/**
 * @hidden
 */
function needsRetry(operationType, code) {
    if ((operationType === OperationType.Read || operationType === OperationType.Query) &&
        CONNECTION_ERROR_CODES.indexOf(code) !== -1) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * This class implements the default connection retry policy for requests.
 * @hidden
 */
class DefaultRetryPolicy {
    constructor(operationType) {
        this.operationType = operationType;
        this.maxTries = 10;
        this.currentRetryAttemptCount = 0;
        this.retryAfterInMs = 1000;
    }
    /**
     * Determines whether the request should be retried or not.
     * @param err - Error returned by the request.
     */
    shouldRetry(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                if (this.currentRetryAttemptCount < this.maxTries &&
                    needsRetry(this.operationType, err.code)) {
                    this.currentRetryAttemptCount++;
                    return true;
                }
            }
            return false;
        });
    }
}

/**
 * This class implements the retry policy for endpoint discovery.
 * @hidden
 */
class EndpointDiscoveryRetryPolicy {
    /**
     * @param globalEndpointManager - The GlobalEndpointManager instance.
     */
    constructor(globalEndpointManager, operationType) {
        this.globalEndpointManager = globalEndpointManager;
        this.operationType = operationType;
        this.maxTries = EndpointDiscoveryRetryPolicy.maxTries;
        this.currentRetryAttemptCount = 0;
        this.retryAfterInMs = EndpointDiscoveryRetryPolicy.retryAfterInMs;
    }
    /**
     * Determines whether the request should be retried or not.
     * @param err - Error returned by the request.
     */
    shouldRetry(err, retryContext, locationEndpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!err) {
                return false;
            }
            if (!retryContext || !locationEndpoint) {
                return false;
            }
            if (!this.globalEndpointManager.enableEndpointDiscovery) {
                return false;
            }
            if (this.currentRetryAttemptCount >= this.maxTries) {
                return false;
            }
            this.currentRetryAttemptCount++;
            if (isReadRequest(this.operationType)) {
                yield this.globalEndpointManager.markCurrentLocationUnavailableForRead(locationEndpoint);
            }
            else {
                yield this.globalEndpointManager.markCurrentLocationUnavailableForWrite(locationEndpoint);
            }
            retryContext.retryCount = this.currentRetryAttemptCount;
            retryContext.clearSessionTokenNotAvailable = false;
            retryContext.retryRequestOnPreferredLocations = false;
            return true;
        });
    }
}
EndpointDiscoveryRetryPolicy.maxTries = 120; // TODO: Constant?
EndpointDiscoveryRetryPolicy.retryAfterInMs = 1000;

/**
 * This class implements the resource throttle retry policy for requests.
 * @hidden
 */
class ResourceThrottleRetryPolicy {
    /**
     * @param maxTries - Max number of retries to be performed for a request.
     * @param fixedRetryIntervalInMs - Fixed retry interval in milliseconds to wait between each
     * retry ignoring the retryAfter returned as part of the response.
     * @param timeoutInSeconds - Max wait time in seconds to wait for a request while the
     * retries are happening.
     */
    constructor(maxTries = 9, fixedRetryIntervalInMs = 0, timeoutInSeconds = 30) {
        this.maxTries = maxTries;
        this.fixedRetryIntervalInMs = fixedRetryIntervalInMs;
        /** Current retry attempt count. */
        this.currentRetryAttemptCount = 0;
        /** Cummulative wait time in milliseconds for a request while the retries are happening. */
        this.cummulativeWaitTimeinMs = 0;
        /** Retry interval in milliseconds to wait before the next request will be sent. */
        this.retryAfterInMs = 0;
        this.timeoutInMs = timeoutInSeconds * 1000;
        this.currentRetryAttemptCount = 0;
        this.cummulativeWaitTimeinMs = 0;
    }
    /**
     * Determines whether the request should be retried or not.
     * @param err - Error returned by the request.
     */
    shouldRetry(err) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: any custom error object
            if (err) {
                if (this.currentRetryAttemptCount < this.maxTries) {
                    this.currentRetryAttemptCount++;
                    this.retryAfterInMs = 0;
                    if (this.fixedRetryIntervalInMs) {
                        this.retryAfterInMs = this.fixedRetryIntervalInMs;
                    }
                    else if (err.retryAfterInMs) {
                        this.retryAfterInMs = err.retryAfterInMs;
                    }
                    if (this.cummulativeWaitTimeinMs < this.timeoutInMs) {
                        this.cummulativeWaitTimeinMs += this.retryAfterInMs;
                        return true;
                    }
                }
            }
            return false;
        });
    }
}

/**
 * This class implements the retry policy for session consistent reads.
 * @hidden
 */
class SessionRetryPolicy {
    /**
     * @param globalEndpointManager - The GlobalEndpointManager instance.
     */
    constructor(globalEndpointManager, resourceType, operationType, connectionPolicy) {
        this.globalEndpointManager = globalEndpointManager;
        this.resourceType = resourceType;
        this.operationType = operationType;
        this.connectionPolicy = connectionPolicy;
        /** Current retry attempt count. */
        this.currentRetryAttemptCount = 0;
        /** Retry interval in milliseconds. */
        this.retryAfterInMs = 0;
    }
    /**
     * Determines whether the request should be retried or not.
     * @param err - Error returned by the request.
     * @param callback - The callback function which takes bool argument which specifies whether the request
     * will be retried or not.
     */
    shouldRetry(err, retryContext) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!err) {
                return false;
            }
            if (!retryContext) {
                return false;
            }
            if (!this.connectionPolicy.enableEndpointDiscovery) {
                return false;
            }
            if (this.globalEndpointManager.canUseMultipleWriteLocations(this.resourceType, this.operationType)) {
                // If we can write to multiple locations, we should against every write endpoint until we succeed
                const endpoints = isReadRequest(this.operationType)
                    ? yield this.globalEndpointManager.getReadEndpoints()
                    : yield this.globalEndpointManager.getWriteEndpoints();
                if (this.currentRetryAttemptCount > endpoints.length) {
                    return false;
                }
                else {
                    retryContext.retryCount = ++this.currentRetryAttemptCount - 1;
                    retryContext.retryRequestOnPreferredLocations = this.currentRetryAttemptCount > 1;
                    retryContext.clearSessionTokenNotAvailable =
                        this.currentRetryAttemptCount === endpoints.length;
                    return true;
                }
            }
            else {
                if (this.currentRetryAttemptCount > 1) {
                    return false;
                }
                else {
                    retryContext.retryCount = ++this.currentRetryAttemptCount - 1;
                    retryContext.retryRequestOnPreferredLocations = false; // Forces all operations to primary write endpoint
                    retryContext.clearSessionTokenNotAvailable = true;
                    return true;
                }
            }
        });
    }
}

/**
 * @hidden
 */
function execute({ retryContext = {}, retryPolicies, requestContext, executeRequest }) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: any response
        if (!retryPolicies) {
            retryPolicies = {
                endpointDiscoveryRetryPolicy: new EndpointDiscoveryRetryPolicy(requestContext.globalEndpointManager, requestContext.operationType),
                resourceThrottleRetryPolicy: new ResourceThrottleRetryPolicy(requestContext.connectionPolicy.retryOptions.maxRetryAttemptCount, requestContext.connectionPolicy.retryOptions.fixedRetryIntervalInMilliseconds, requestContext.connectionPolicy.retryOptions.maxWaitTimeInSeconds),
                sessionReadRetryPolicy: new SessionRetryPolicy(requestContext.globalEndpointManager, requestContext.resourceType, requestContext.operationType, requestContext.connectionPolicy),
                defaultRetryPolicy: new DefaultRetryPolicy(requestContext.operationType)
            };
        }
        if (retryContext && retryContext.clearSessionTokenNotAvailable) {
            requestContext.client.clearSessionToken(requestContext.path);
        }
        requestContext.endpoint = yield requestContext.globalEndpointManager.resolveServiceEndpoint(requestContext.resourceType, requestContext.operationType);
        try {
            const response = yield executeRequest(requestContext);
            response.headers[Constants.ThrottleRetryCount] =
                retryPolicies.resourceThrottleRetryPolicy.currentRetryAttemptCount;
            response.headers[Constants.ThrottleRetryWaitTimeInMs] =
                retryPolicies.resourceThrottleRetryPolicy.cummulativeWaitTimeinMs;
            return response;
        }
        catch (err) {
            // TODO: any error
            let retryPolicy = null;
            const headers = err.headers || {};
            if (err.code === StatusCodes.Forbidden &&
                (err.substatus === SubStatusCodes.DatabaseAccountNotFound ||
                    err.substatus === SubStatusCodes.WriteForbidden)) {
                retryPolicy = retryPolicies.endpointDiscoveryRetryPolicy;
            }
            else if (err.code === StatusCodes.TooManyRequests) {
                retryPolicy = retryPolicies.resourceThrottleRetryPolicy;
            }
            else if (err.code === StatusCodes.NotFound &&
                err.substatus === SubStatusCodes.ReadSessionNotAvailable) {
                retryPolicy = retryPolicies.sessionReadRetryPolicy;
            }
            else {
                retryPolicy = retryPolicies.defaultRetryPolicy;
            }
            const results = yield retryPolicy.shouldRetry(err, retryContext, requestContext.endpoint);
            if (!results) {
                headers[Constants.ThrottleRetryCount] =
                    retryPolicies.resourceThrottleRetryPolicy.currentRetryAttemptCount;
                headers[Constants.ThrottleRetryWaitTimeInMs] =
                    retryPolicies.resourceThrottleRetryPolicy.cummulativeWaitTimeinMs;
                err.headers = Object.assign(Object.assign({}, err.headers), headers);
                throw err;
            }
            else {
                requestContext.retryCount++;
                const newUrl = results[1]; // TODO: any hack
                if (newUrl !== undefined) {
                    requestContext.endpoint = newUrl;
                }
                yield sleep(retryPolicy.retryAfterInMs);
                return execute({
                    executeRequest,
                    requestContext,
                    retryContext,
                    retryPolicies
                });
            }
        }
    });
}

/**
 * @hidden
 */
let defaultHttpAgent;
/**
 * @hidden
 */
let defaultHttpsAgent;

/** @hidden */
const log$2 = logger("RequestHandler");
function executeRequest(requestContext) {
    return __awaiter(this, void 0, void 0, function* () {
        return executePlugins(requestContext, httpRequest, PluginOn.request);
    });
}
/**
 * @hidden
 */
function httpRequest(requestContext) {
    return __awaiter(this, void 0, void 0, function* () {
        const controller = new browser$1();
        const signal = controller.signal;
        // Wrap users passed abort events and call our own internal abort()
        const userSignal = requestContext.options && requestContext.options.abortSignal;
        if (userSignal) {
            if (userSignal.aborted) {
                controller.abort();
            }
            else {
                userSignal.addEventListener("abort", () => {
                    controller.abort();
                });
            }
        }
        const timeout = setTimeout(() => {
            controller.abort();
        }, requestContext.connectionPolicy.requestTimeout);
        let response;
        if (requestContext.body) {
            requestContext.body = bodyFromData(requestContext.body);
        }
        try {
            response = yield fetch(trimSlashes(requestContext.endpoint) + requestContext.path, {
                method: requestContext.method,
                headers: requestContext.headers,
                agent: (parsedUrl) => {
                    if (requestContext.requestAgent) {
                        return requestContext.requestAgent;
                    }
                    return parsedUrl.protocol === "http" ? defaultHttpAgent : defaultHttpsAgent;
                },
                signal,
                body: requestContext.body
            });
        }
        catch (error) {
            if (error.name === "AbortError") {
                // If the user passed signal caused the abort, cancel the timeout and rethrow the error
                if (userSignal && userSignal.aborted === true) {
                    clearTimeout(timeout);
                    throw error;
                }
                // If the user didn't cancel, it must be an abort we called due to timeout
                throw new TimeoutError();
            }
            throw error;
        }
        clearTimeout(timeout);
        const result = response.status === 204 || response.status === 304 ? null : yield response.json();
        const headers = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        const substatus = headers[Constants.HttpHeaders.SubStatus]
            ? parseInt(headers[Constants.HttpHeaders.SubStatus], 10)
            : undefined;
        if (response.status >= 400) {
            const errorResponse = new Error(result.message);
            log$2.warn(response.status +
                " " +
                requestContext.endpoint +
                " " +
                requestContext.path +
                " " +
                result.message);
            errorResponse.code = response.status;
            errorResponse.body = result;
            errorResponse.headers = headers;
            if (Constants.HttpHeaders.ActivityId in headers) {
                errorResponse.activityId = headers[Constants.HttpHeaders.ActivityId];
            }
            if (Constants.HttpHeaders.SubStatus in headers) {
                errorResponse.substatus = substatus;
            }
            if (Constants.HttpHeaders.RetryAfterInMs in headers) {
                errorResponse.retryAfterInMs = parseInt(headers[Constants.HttpHeaders.RetryAfterInMs], 10);
                Object.defineProperty(errorResponse, "retryAfterInMilliseconds", {
                    get: () => {
                        return errorResponse.retryAfterInMs;
                    }
                });
            }
            throw errorResponse;
        }
        return {
            headers,
            result,
            code: response.status,
            substatus
        };
    });
}
/**
 * @hidden
 */
function request(requestContext) {
    return __awaiter(this, void 0, void 0, function* () {
        if (requestContext.body) {
            requestContext.body = bodyFromData(requestContext.body);
            if (!requestContext.body) {
                throw new Error("parameter data must be a javascript object, string, or Buffer");
            }
        }
        return execute({
            requestContext,
            executeRequest
        });
    });
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Models vector clock bases session token. Session token has the following format:
 * `{Version}#{GlobalLSN}#{RegionId1}={LocalLsn1}#{RegionId2}={LocalLsn2}....#{RegionIdN}={LocalLsnN}`
 * 'Version' captures the configuration number of the partition which returned this session token.
 * 'Version' is incremented everytime topology of the partition is updated (say due to Add/Remove/Failover).
 *
 * The choice of separators '#' and '=' is important. Separators ';' and ',' are used to delimit
 * per-partitionKeyRange session token
 * @hidden
 *
 */
class VectorSessionToken {
    constructor(version, globalLsn, localLsnByregion, sessionToken) {
        this.version = version;
        this.globalLsn = globalLsn;
        this.localLsnByregion = localLsnByregion;
        this.sessionToken = sessionToken;
        if (!this.sessionToken) {
            const regionAndLocalLsn = [];
            for (const [key, value] of this.localLsnByregion.entries()) {
                regionAndLocalLsn.push(`${key}${VectorSessionToken.REGION_PROGRESS_SEPARATOR}${value}`);
            }
            const regionProgress = regionAndLocalLsn.join(VectorSessionToken.SEGMENT_SEPARATOR);
            if (regionProgress === "") {
                this.sessionToken = `${this.version}${VectorSessionToken.SEGMENT_SEPARATOR}${this.globalLsn}`;
            }
            else {
                this.sessionToken = `${this.version}${VectorSessionToken.SEGMENT_SEPARATOR}${this.globalLsn}${VectorSessionToken.SEGMENT_SEPARATOR}${regionProgress}`;
            }
        }
    }
    static create(sessionToken) {
        const [versionStr, globalLsnStr, ...regionSegments] = sessionToken.split(VectorSessionToken.SEGMENT_SEPARATOR);
        const version = parseInt(versionStr, 10);
        const globalLsn = parseFloat(globalLsnStr);
        if (typeof version !== "number" || typeof globalLsn !== "number") {
            return null;
        }
        const lsnByRegion = new Map();
        for (const regionSegment of regionSegments) {
            const [regionIdStr, localLsnStr] = regionSegment.split(VectorSessionToken.REGION_PROGRESS_SEPARATOR);
            if (!regionIdStr || !localLsnStr) {
                return null;
            }
            const regionId = parseInt(regionIdStr, 10);
            let localLsn;
            try {
                localLsn = localLsnStr;
            }
            catch (err) {
                // TODO: log error
                return null;
            }
            if (typeof regionId !== "number") {
                return null;
            }
            lsnByRegion.set(regionId, localLsn);
        }
        return new VectorSessionToken(version, globalLsn, lsnByRegion, sessionToken);
    }
    equals(other) {
        return !other
            ? false
            : this.version === other.version &&
                this.globalLsn === other.globalLsn &&
                this.areRegionProgressEqual(other.localLsnByregion);
    }
    merge(other) {
        if (other == null) {
            throw new Error("other (Vector Session Token) must not be null");
        }
        if (this.version === other.version &&
            this.localLsnByregion.size !== other.localLsnByregion.size) {
            throw new Error(`Compared session tokens ${this.sessionToken} and ${other.sessionToken} have unexpected regions`);
        }
        const [higherVersionSessionToken, lowerVersionSessionToken] = this.version < other.version ? [other, this] : [this, other];
        const highestLocalLsnByRegion = new Map();
        for (const [regionId, highLocalLsn] of higherVersionSessionToken.localLsnByregion.entries()) {
            const lowLocalLsn = lowerVersionSessionToken.localLsnByregion.get(regionId);
            if (lowLocalLsn) {
                highestLocalLsnByRegion.set(regionId, max(highLocalLsn, lowLocalLsn));
            }
            else if (this.version === other.version) {
                throw new Error(`Compared session tokens have unexpected regions. Session 1: ${this.sessionToken} - Session 2: ${this.sessionToken}`);
            }
            else {
                highestLocalLsnByRegion.set(regionId, highLocalLsn);
            }
        }
        return new VectorSessionToken(Math.max(this.version, other.version), Math.max(this.globalLsn, other.globalLsn), highestLocalLsnByRegion);
    }
    toString() {
        return this.sessionToken;
    }
    areRegionProgressEqual(other) {
        if (this.localLsnByregion.size !== other.size) {
            return false;
        }
        for (const [regionId, localLsn] of this.localLsnByregion.entries()) {
            const otherLocalLsn = other.get(regionId);
            if (localLsn !== otherLocalLsn) {
                return false;
            }
        }
        return true;
    }
}
VectorSessionToken.SEGMENT_SEPARATOR = "#";
VectorSessionToken.REGION_PROGRESS_SEPARATOR = "=";
/**
 * @hidden
 */
function max(int1, int2) {
    // NOTE: This only works for positive numbers
    if (int1.length === int2.length) {
        return int1 > int2 ? int1 : int2;
    }
    else if (int1.length > int2.length) {
        return int1;
    }
    else {
        return int2;
    }
}

// Copyright (c) Microsoft Corporation.
/** @hidden */
class SessionContainer {
    constructor(collectionNameToCollectionResourceId = new Map(), collectionResourceIdToSessionTokens = new Map()) {
        this.collectionNameToCollectionResourceId = collectionNameToCollectionResourceId;
        this.collectionResourceIdToSessionTokens = collectionResourceIdToSessionTokens;
    }
    get(request) {
        if (!request) {
            throw new Error("request cannot be null");
        }
        const collectionName = getContainerLink(trimSlashes(request.resourceAddress));
        const rangeIdToTokenMap = this.getPartitionKeyRangeIdToTokenMap(collectionName);
        return SessionContainer.getCombinedSessionTokenString(rangeIdToTokenMap);
    }
    remove(request) {
        let collectionResourceId;
        const resourceAddress = trimSlashes(request.resourceAddress);
        const collectionName = getContainerLink(resourceAddress);
        if (collectionName) {
            collectionResourceId = this.collectionNameToCollectionResourceId.get(collectionName);
            this.collectionNameToCollectionResourceId.delete(collectionName);
        }
        if (collectionResourceId !== undefined) {
            this.collectionResourceIdToSessionTokens.delete(collectionResourceId);
        }
    }
    set(request, resHeaders) {
        // TODO: we check the master logic a few different places. Might not need it.
        if (!resHeaders ||
            SessionContainer.isReadingFromMaster(request.resourceType, request.operationType)) {
            return;
        }
        const sessionTokenString = resHeaders[Constants.HttpHeaders.SessionToken];
        if (!sessionTokenString) {
            return;
        }
        const containerName = this.getContainerName(request, resHeaders);
        const ownerId = !request.isNameBased
            ? request.resourceId
            : resHeaders[Constants.HttpHeaders.OwnerId] || request.resourceId;
        if (!ownerId) {
            return;
        }
        if (containerName && this.validateOwnerID(ownerId)) {
            if (!this.collectionResourceIdToSessionTokens.has(ownerId)) {
                this.collectionResourceIdToSessionTokens.set(ownerId, new Map());
            }
            if (!this.collectionNameToCollectionResourceId.has(containerName)) {
                this.collectionNameToCollectionResourceId.set(containerName, ownerId);
            }
            const containerSessionContainer = this.collectionResourceIdToSessionTokens.get(ownerId);
            SessionContainer.compareAndSetToken(sessionTokenString, containerSessionContainer);
        }
    }
    validateOwnerID(ownerId) {
        // If ownerId contains exactly 8 bytes it represents a unique database+collection identifier. Otherwise it represents another resource
        // The first 4 bytes are the database. The last 4 bytes are the collection.
        // Cosmos rids potentially contain "-" which is an invalid character in the browser atob implementation
        // See https://en.wikipedia.org/wiki/Base64#Filenames
        return atob$1(ownerId.replace(/-/g, "/")).length === 8;
    }
    getPartitionKeyRangeIdToTokenMap(collectionName) {
        let rangeIdToTokenMap = null;
        if (collectionName && this.collectionNameToCollectionResourceId.has(collectionName)) {
            rangeIdToTokenMap = this.collectionResourceIdToSessionTokens.get(this.collectionNameToCollectionResourceId.get(collectionName));
        }
        return rangeIdToTokenMap;
    }
    static getCombinedSessionTokenString(tokens) {
        if (!tokens || tokens.size === 0) {
            return SessionContainer.EMPTY_SESSION_TOKEN;
        }
        let result = "";
        for (const [range, token] of tokens.entries()) {
            result +=
                range +
                    SessionContainer.SESSION_TOKEN_PARTITION_SPLITTER +
                    token.toString() +
                    SessionContainer.SESSION_TOKEN_SEPARATOR;
        }
        return result.slice(0, -1);
    }
    static compareAndSetToken(newTokenString, containerSessionTokens) {
        if (!newTokenString) {
            return;
        }
        const partitionsParts = newTokenString.split(SessionContainer.SESSION_TOKEN_SEPARATOR);
        for (const partitionPart of partitionsParts) {
            const newTokenParts = partitionPart.split(SessionContainer.SESSION_TOKEN_PARTITION_SPLITTER);
            if (newTokenParts.length !== 2) {
                return;
            }
            const range = newTokenParts[0];
            const newToken = VectorSessionToken.create(newTokenParts[1]);
            const tokenForRange = !containerSessionTokens.get(range)
                ? newToken
                : containerSessionTokens.get(range).merge(newToken);
            containerSessionTokens.set(range, tokenForRange);
        }
    }
    // TODO: have a assert if the type doesn't mastch known types
    static isReadingFromMaster(resourceType, operationType) {
        if (resourceType === Constants.Path.OffersPathSegment ||
            resourceType === Constants.Path.DatabasesPathSegment ||
            resourceType === Constants.Path.UsersPathSegment ||
            resourceType === Constants.Path.PermissionsPathSegment ||
            resourceType === Constants.Path.TopologyPathSegment ||
            resourceType === Constants.Path.DatabaseAccountPathSegment ||
            resourceType === Constants.Path.PartitionKeyRangesPathSegment ||
            (resourceType === Constants.Path.CollectionsPathSegment &&
                operationType === OperationType.Query)) {
            return true;
        }
        return false;
    }
    getContainerName(request, headers) {
        let ownerFullName = headers[Constants.HttpHeaders.OwnerFullName];
        if (!ownerFullName) {
            ownerFullName = trimSlashes(request.resourceAddress);
        }
        return getContainerLink(ownerFullName);
    }
}
SessionContainer.EMPTY_SESSION_TOKEN = "";
SessionContainer.SESSION_TOKEN_SEPARATOR = ",";
SessionContainer.SESSION_TOKEN_PARTITION_SPLITTER = ":";

/** @hidden */
const log$3 = logger("ClientContext");
const QueryJsonContentType = "application/query+json";
/**
 * @hidden
 * @hidden
 */
class ClientContext {
    constructor(cosmosClientOptions, globalEndpointManager) {
        this.cosmosClientOptions = cosmosClientOptions;
        this.globalEndpointManager = globalEndpointManager;
        this.connectionPolicy = cosmosClientOptions.connectionPolicy;
        this.sessionContainer = new SessionContainer();
        this.partitionKeyDefinitionCache = {};
    }
    /** @hidden */
    read({ path, resourceType, resourceId, options = {}, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request$1 = {
                    globalEndpointManager: this.globalEndpointManager,
                    requestAgent: this.cosmosClientOptions.agent,
                    connectionPolicy: this.connectionPolicy,
                    method: HTTPMethod.get,
                    path,
                    operationType: OperationType.Read,
                    client: this,
                    resourceId,
                    options,
                    resourceType,
                    plugins: this.cosmosClientOptions.plugins,
                    partitionKey
                };
                request$1.headers = yield this.buildHeaders(request$1);
                this.applySessionToken(request$1);
                // read will use ReadEndpoint since it uses GET operation
                request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
                const response = yield executePlugins(request$1, request, PluginOn.operation);
                this.captureSessionToken(undefined, path, OperationType.Read, response.headers);
                return response;
            }
            catch (err) {
                this.captureSessionToken(err, path, OperationType.Upsert, err.headers);
                throw err;
            }
        });
    }
    queryFeed({ path, resourceType, resourceId, resultFn, query, options, partitionKeyRangeId, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Query operations will use ReadEndpoint even though it uses
            // GET(for queryFeed) and POST(for regular query operations)
            const request$1 = {
                globalEndpointManager: this.globalEndpointManager,
                requestAgent: this.cosmosClientOptions.agent,
                connectionPolicy: this.connectionPolicy,
                method: HTTPMethod.get,
                path,
                operationType: OperationType.Query,
                client: this,
                partitionKeyRangeId,
                resourceId,
                resourceType,
                options,
                body: query,
                plugins: this.cosmosClientOptions.plugins,
                partitionKey
            };
            const requestId = v4();
            if (query !== undefined) {
                request$1.method = HTTPMethod.post;
            }
            request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
            request$1.headers = yield this.buildHeaders(request$1);
            if (query !== undefined) {
                request$1.headers[Constants.HttpHeaders.IsQuery] = "true";
                request$1.headers[Constants.HttpHeaders.ContentType] = QueryJsonContentType;
                if (typeof query === "string") {
                    request$1.body = { query }; // Converts query text to query object.
                }
            }
            this.applySessionToken(request$1);
            log$3.info("query " +
                requestId +
                " started" +
                (request$1.partitionKeyRangeId ? " pkrid: " + request$1.partitionKeyRangeId : ""));
            log$3.silly(request$1);
            const start = Date.now();
            const response = yield request(request$1);
            log$3.info("query " + requestId + " finished - " + (Date.now() - start) + "ms");
            this.captureSessionToken(undefined, path, OperationType.Query, response.headers);
            return this.processQueryFeedResponse(response, !!query, resultFn);
        });
    }
    getQueryPlan(path, resourceType, resourceId, query, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const request$1 = {
                globalEndpointManager: this.globalEndpointManager,
                requestAgent: this.cosmosClientOptions.agent,
                connectionPolicy: this.connectionPolicy,
                method: HTTPMethod.post,
                path,
                operationType: OperationType.Read,
                client: this,
                resourceId,
                resourceType,
                options,
                body: query,
                plugins: this.cosmosClientOptions.plugins
            };
            request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
            request$1.headers = yield this.buildHeaders(request$1);
            request$1.headers[Constants.HttpHeaders.IsQueryPlan] = "True";
            request$1.headers[Constants.HttpHeaders.QueryVersion] = "1.4";
            request$1.headers[Constants.HttpHeaders.SupportedQueryFeatures] =
                "NonValueAggregate, Aggregate, Distinct, MultipleOrderBy, OffsetAndLimit, OrderBy, Top, CompositeAggregate, GroupBy, MultipleAggregates";
            request$1.headers[Constants.HttpHeaders.ContentType] = QueryJsonContentType;
            if (typeof query === "string") {
                request$1.body = { query }; // Converts query text to query object.
            }
            this.applySessionToken(request$1);
            const response = yield request(request$1);
            this.captureSessionToken(undefined, path, OperationType.Query, response.headers);
            return response;
        });
    }
    queryPartitionKeyRanges(collectionLink, query, options) {
        const path = getPathFromLink(collectionLink, ResourceType.pkranges);
        const id = getIdFromLink(collectionLink);
        const cb = (innerOptions) => {
            return this.queryFeed({
                path,
                resourceType: ResourceType.pkranges,
                resourceId: id,
                resultFn: (result) => result.PartitionKeyRanges,
                query,
                options: innerOptions
            });
        };
        return new QueryIterator(this, query, options, cb);
    }
    delete({ path, resourceType, resourceId, options = {}, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request$1 = {
                    globalEndpointManager: this.globalEndpointManager,
                    requestAgent: this.cosmosClientOptions.agent,
                    connectionPolicy: this.connectionPolicy,
                    method: HTTPMethod.delete,
                    client: this,
                    operationType: OperationType.Delete,
                    path,
                    resourceType,
                    options,
                    resourceId,
                    plugins: this.cosmosClientOptions.plugins,
                    partitionKey
                };
                request$1.headers = yield this.buildHeaders(request$1);
                this.applySessionToken(request$1);
                // deleteResource will use WriteEndpoint since it uses DELETE operation
                request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
                const response = yield executePlugins(request$1, request, PluginOn.operation);
                if (parseLink(path).type !== "colls") {
                    this.captureSessionToken(undefined, path, OperationType.Delete, response.headers);
                }
                else {
                    this.clearSessionToken(path);
                }
                return response;
            }
            catch (err) {
                this.captureSessionToken(err, path, OperationType.Upsert, err.headers);
                throw err;
            }
        });
    }
    create({ body, path, resourceType, resourceId, options = {}, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request$1 = {
                    globalEndpointManager: this.globalEndpointManager,
                    requestAgent: this.cosmosClientOptions.agent,
                    connectionPolicy: this.connectionPolicy,
                    method: HTTPMethod.post,
                    client: this,
                    operationType: OperationType.Create,
                    path,
                    resourceType,
                    resourceId,
                    body,
                    options,
                    plugins: this.cosmosClientOptions.plugins,
                    partitionKey
                };
                request$1.headers = yield this.buildHeaders(request$1);
                // create will use WriteEndpoint since it uses POST operation
                this.applySessionToken(request$1);
                request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
                const response = yield executePlugins(request$1, request, PluginOn.operation);
                this.captureSessionToken(undefined, path, OperationType.Create, response.headers);
                return response;
            }
            catch (err) {
                this.captureSessionToken(err, path, OperationType.Upsert, err.headers);
                throw err;
            }
        });
    }
    processQueryFeedResponse(res, isQuery, resultFn) {
        if (isQuery) {
            return { result: resultFn(res.result), headers: res.headers, code: res.code };
        }
        else {
            const newResult = resultFn(res.result).map((body) => body);
            return { result: newResult, headers: res.headers, code: res.code };
        }
    }
    applySessionToken(requestContext) {
        const request = this.getSessionParams(requestContext.path);
        if (requestContext.headers && requestContext.headers[Constants.HttpHeaders.SessionToken]) {
            return;
        }
        const sessionConsistency = requestContext.headers[Constants.HttpHeaders.ConsistencyLevel];
        if (!sessionConsistency) {
            return;
        }
        if (sessionConsistency !== ConsistencyLevel.Session) {
            return;
        }
        if (request.resourceAddress) {
            const sessionToken = this.sessionContainer.get(request);
            if (sessionToken) {
                requestContext.headers[Constants.HttpHeaders.SessionToken] = sessionToken;
            }
        }
    }
    replace({ body, path, resourceType, resourceId, options = {}, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request$1 = {
                    globalEndpointManager: this.globalEndpointManager,
                    requestAgent: this.cosmosClientOptions.agent,
                    connectionPolicy: this.connectionPolicy,
                    method: HTTPMethod.put,
                    client: this,
                    operationType: OperationType.Replace,
                    path,
                    resourceType,
                    body,
                    resourceId,
                    options,
                    plugins: this.cosmosClientOptions.plugins,
                    partitionKey
                };
                request$1.headers = yield this.buildHeaders(request$1);
                this.applySessionToken(request$1);
                // replace will use WriteEndpoint since it uses PUT operation
                request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
                const response = yield executePlugins(request$1, request, PluginOn.operation);
                this.captureSessionToken(undefined, path, OperationType.Replace, response.headers);
                return response;
            }
            catch (err) {
                this.captureSessionToken(err, path, OperationType.Upsert, err.headers);
                throw err;
            }
        });
    }
    upsert({ body, path, resourceType, resourceId, options = {}, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request$1 = {
                    globalEndpointManager: this.globalEndpointManager,
                    requestAgent: this.cosmosClientOptions.agent,
                    connectionPolicy: this.connectionPolicy,
                    method: HTTPMethod.post,
                    client: this,
                    operationType: OperationType.Upsert,
                    path,
                    resourceType,
                    body,
                    resourceId,
                    options,
                    plugins: this.cosmosClientOptions.plugins,
                    partitionKey
                };
                request$1.headers = yield this.buildHeaders(request$1);
                request$1.headers[Constants.HttpHeaders.IsUpsert] = true;
                this.applySessionToken(request$1);
                // upsert will use WriteEndpoint since it uses POST operation
                request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
                const response = yield executePlugins(request$1, request, PluginOn.operation);
                this.captureSessionToken(undefined, path, OperationType.Upsert, response.headers);
                return response;
            }
            catch (err) {
                this.captureSessionToken(err, path, OperationType.Upsert, err.headers);
                throw err;
            }
        });
    }
    execute({ sprocLink, params, options = {}, partitionKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Accept a single parameter or an array of parameters.
            // Didn't add type annotation for this because we should legacy this behavior
            if (params !== null && params !== undefined && !Array.isArray(params)) {
                params = [params];
            }
            const path = getPathFromLink(sprocLink);
            const id = getIdFromLink(sprocLink);
            const request$1 = {
                globalEndpointManager: this.globalEndpointManager,
                requestAgent: this.cosmosClientOptions.agent,
                connectionPolicy: this.connectionPolicy,
                method: HTTPMethod.post,
                client: this,
                operationType: OperationType.Execute,
                path,
                resourceType: ResourceType.sproc,
                options,
                resourceId: id,
                body: params,
                plugins: this.cosmosClientOptions.plugins,
                partitionKey
            };
            request$1.headers = yield this.buildHeaders(request$1);
            // executeStoredProcedure will use WriteEndpoint since it uses POST operation
            request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
            return executePlugins(request$1, request, PluginOn.operation);
        });
    }
    /**
     * Gets the Database account information.
     * @param options - `urlConnection` in the options is the endpoint url whose database account needs to be retrieved.
     * If not present, current client's url will be used.
     */
    getDatabaseAccount(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = options.urlConnection || this.cosmosClientOptions.endpoint;
            const request$1 = {
                endpoint,
                globalEndpointManager: this.globalEndpointManager,
                requestAgent: this.cosmosClientOptions.agent,
                connectionPolicy: this.connectionPolicy,
                method: HTTPMethod.get,
                client: this,
                operationType: OperationType.Read,
                path: "",
                resourceType: ResourceType.none,
                options,
                plugins: this.cosmosClientOptions.plugins
            };
            request$1.headers = yield this.buildHeaders(request$1);
            // await options.beforeOperation({ endpoint, request, headers: requestHeaders });
            const { result, headers } = yield executePlugins(request$1, request, PluginOn.operation);
            const databaseAccount = new DatabaseAccount(result, headers);
            return { result: databaseAccount, headers };
        });
    }
    getWriteEndpoint() {
        return this.globalEndpointManager.getWriteEndpoint();
    }
    getReadEndpoint() {
        return this.globalEndpointManager.getReadEndpoint();
    }
    bulk({ body, path, partitionKeyRangeId, resourceId, bulkOptions = {}, options = {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request$1 = {
                    globalEndpointManager: this.globalEndpointManager,
                    requestAgent: this.cosmosClientOptions.agent,
                    connectionPolicy: this.connectionPolicy,
                    method: HTTPMethod.post,
                    client: this,
                    operationType: OperationType.Batch,
                    path,
                    body,
                    resourceType: ResourceType.item,
                    resourceId,
                    plugins: this.cosmosClientOptions.plugins,
                    options
                };
                request$1.headers = yield this.buildHeaders(request$1);
                request$1.headers[Constants.HttpHeaders.IsBatchRequest] = true;
                request$1.headers[Constants.HttpHeaders.PartitionKeyRangeID] = partitionKeyRangeId;
                request$1.headers[Constants.HttpHeaders.IsBatchAtomic] = false;
                request$1.headers[Constants.HttpHeaders.BatchContinueOnError] =
                    bulkOptions.continueOnError || false;
                this.applySessionToken(request$1);
                request$1.endpoint = yield this.globalEndpointManager.resolveServiceEndpoint(request$1.resourceType, request$1.operationType);
                const response = yield executePlugins(request$1, request, PluginOn.operation);
                this.captureSessionToken(undefined, path, OperationType.Batch, response.headers);
                return response;
            }
            catch (err) {
                this.captureSessionToken(err, path, OperationType.Upsert, err.headers);
                throw err;
            }
        });
    }
    captureSessionToken(err, path, operationType, resHeaders) {
        const request = this.getSessionParams(path);
        request.operationType = operationType;
        if (!err ||
            (!this.isMasterResource(request.resourceType) &&
                (err.code === StatusCodes.PreconditionFailed ||
                    err.code === StatusCodes.Conflict ||
                    (err.code === StatusCodes.NotFound &&
                        err.substatus !== SubStatusCodes.ReadSessionNotAvailable)))) {
            this.sessionContainer.set(request, resHeaders);
        }
    }
    clearSessionToken(path) {
        const request = this.getSessionParams(path);
        this.sessionContainer.remove(request);
    }
    getSessionParams(resourceLink) {
        const resourceId = null;
        let resourceAddress = null;
        const parserOutput = parseLink(resourceLink);
        resourceAddress = parserOutput.objectBody.self;
        const resourceType = parserOutput.type;
        return {
            resourceId,
            resourceAddress,
            resourceType,
            isNameBased: true
        };
    }
    isMasterResource(resourceType) {
        if (resourceType === Constants.Path.OffersPathSegment ||
            resourceType === Constants.Path.DatabasesPathSegment ||
            resourceType === Constants.Path.UsersPathSegment ||
            resourceType === Constants.Path.PermissionsPathSegment ||
            resourceType === Constants.Path.TopologyPathSegment ||
            resourceType === Constants.Path.DatabaseAccountPathSegment ||
            resourceType === Constants.Path.PartitionKeyRangesPathSegment ||
            resourceType === Constants.Path.CollectionsPathSegment) {
            return true;
        }
        return false;
    }
    buildHeaders(requestContext) {
        return getHeaders({
            clientOptions: this.cosmosClientOptions,
            defaultHeaders: Object.assign(Object.assign({}, this.cosmosClientOptions.defaultHeaders), requestContext.options.initialHeaders),
            verb: requestContext.method,
            path: requestContext.path,
            resourceId: requestContext.resourceId,
            resourceType: requestContext.resourceType,
            options: requestContext.options,
            partitionKeyRangeId: requestContext.partitionKeyRangeId,
            useMultipleWriteLocations: this.connectionPolicy.useMultipleWriteLocations,
            partitionKey: requestContext.partitionKey
        });
    }
}

/**
 * @hidden
 * This internal class implements the logic for endpoint management for geo-replicated database accounts.
 */
class GlobalEndpointManager {
    /**
     * @param options - The document client instance.
     */
    constructor(options, readDatabaseAccount) {
        this.readDatabaseAccount = readDatabaseAccount;
        this.options = options;
        this.defaultEndpoint = options.endpoint;
        this.enableEndpointDiscovery = options.connectionPolicy.enableEndpointDiscovery;
        this.isRefreshing = false;
        this.preferredLocations = this.options.connectionPolicy.preferredLocations;
    }
    /**
     * Gets the current read endpoint from the endpoint cache.
     */
    getReadEndpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resolveServiceEndpoint(ResourceType.item, OperationType.Read);
        });
    }
    /**
     * Gets the current write endpoint from the endpoint cache.
     */
    getWriteEndpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resolveServiceEndpoint(ResourceType.item, OperationType.Replace);
        });
    }
    getReadEndpoints() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.readableLocations.map((loc) => loc.databaseAccountEndpoint);
        });
    }
    getWriteEndpoints() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.writeableLocations.map((loc) => loc.databaseAccountEndpoint);
        });
    }
    markCurrentLocationUnavailableForRead(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshEndpointList();
            const location = this.readableLocations.find((loc) => loc.databaseAccountEndpoint === endpoint);
            if (location) {
                location.unavailable = true;
            }
        });
    }
    markCurrentLocationUnavailableForWrite(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshEndpointList();
            const location = this.writeableLocations.find((loc) => loc.databaseAccountEndpoint === endpoint);
            if (location) {
                location.unavailable = true;
            }
        });
    }
    canUseMultipleWriteLocations(resourceType, operationType) {
        let canUse = this.options.connectionPolicy.useMultipleWriteLocations;
        if (resourceType) {
            canUse =
                canUse &&
                    (resourceType === ResourceType.item ||
                        (resourceType === ResourceType.sproc && operationType === OperationType.Execute));
        }
        return canUse;
    }
    resolveServiceEndpoint(resourceType, operationType) {
        return __awaiter(this, void 0, void 0, function* () {
            // If endpoint discovery is disabled, always use the user provided endpoint
            if (!this.options.connectionPolicy.enableEndpointDiscovery) {
                return this.defaultEndpoint;
            }
            // If getting the database account, always use the user provided endpoint
            if (resourceType === ResourceType.none) {
                return this.defaultEndpoint;
            }
            if (!this.readableLocations || !this.writeableLocations) {
                const { resource: databaseAccount } = yield this.readDatabaseAccount({
                    urlConnection: this.defaultEndpoint
                });
                this.writeableLocations = databaseAccount.writableLocations;
                this.readableLocations = databaseAccount.readableLocations;
            }
            const locations = isReadRequest(operationType)
                ? this.readableLocations
                : this.writeableLocations;
            let location;
            // If we have preferred locations, try each one in order and use the first available one
            if (this.preferredLocations && this.preferredLocations.length > 0) {
                for (const preferredLocation of this.preferredLocations) {
                    location = locations.find((loc) => loc.unavailable !== true &&
                        normalizeEndpoint(loc.name) === normalizeEndpoint(preferredLocation));
                    if (location) {
                        break;
                    }
                }
            }
            // If no preferred locations or one did not match, just grab the first one that is available
            if (!location) {
                location = locations.find((loc) => {
                    return loc.unavailable !== true;
                });
            }
            return location ? location.databaseAccountEndpoint : this.defaultEndpoint;
        });
    }
    /**
     * Refreshes the endpoint list by retrieving the writable and readable locations
     *  from the geo-replicated database account and then updating the locations cache.
     *   We skip the refreshing if enableEndpointDiscovery is set to False
     */
    refreshEndpointList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isRefreshing && this.enableEndpointDiscovery) {
                this.isRefreshing = true;
                const databaseAccount = yield this.getDatabaseAccountFromAnyEndpoint();
                if (databaseAccount) {
                    this.refreshEndpoints(databaseAccount);
                }
                this.isRefreshing = false;
            }
        });
    }
    refreshEndpoints(databaseAccount) {
        for (const location of databaseAccount.writableLocations) {
            const existingLocation = this.writeableLocations.find((loc) => loc.name === location.name);
            if (!existingLocation) {
                this.writeableLocations.push(location);
            }
        }
        for (const location of databaseAccount.writableLocations) {
            const existingLocation = this.readableLocations.find((loc) => loc.name === location.name);
            if (!existingLocation) {
                this.readableLocations.push(location);
            }
        }
    }
    /**
     * Gets the database account first by using the default endpoint, and if that doesn't returns
     * use the endpoints for the preferred locations in the order they are specified to get
     * the database account.
     */
    getDatabaseAccountFromAnyEndpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = { urlConnection: this.defaultEndpoint };
                const { resource: databaseAccount } = yield this.readDatabaseAccount(options);
                return databaseAccount;
                // If for any reason(non - globaldb related), we are not able to get the database
                // account from the above call to readDatabaseAccount,
                // we would try to get this information from any of the preferred locations that the user
                // might have specified (by creating a locational endpoint)
                // and keeping eating the exception until we get the database account and return None at the end,
                // if we are not able to get that info from any endpoints
            }
            catch (err) {
                // TODO: Tracing
            }
            if (this.preferredLocations) {
                for (const location of this.preferredLocations) {
                    try {
                        const locationalEndpoint = GlobalEndpointManager.getLocationalEndpoint(this.defaultEndpoint, location);
                        const options = { urlConnection: locationalEndpoint };
                        const { resource: databaseAccount } = yield this.readDatabaseAccount(options);
                        if (databaseAccount) {
                            return databaseAccount;
                        }
                    }
                    catch (err) {
                        // TODO: Tracing
                    }
                }
            }
        });
    }
    /**
     * Gets the locational endpoint using the location name passed to it using the default endpoint.
     *
     * @param defaultEndpoint - The default endpoint to use for the endpoint.
     * @param locationName    - The location name for the azure region like "East US".
     */
    static getLocationalEndpoint(defaultEndpoint, locationName) {
        // For defaultEndpoint like 'https://contoso.documents.azure.com:443/' parse it to generate URL format
        // This defaultEndpoint should be global endpoint(and cannot be a locational endpoint)
        // and we agreed to document that
        const endpointUrl = new URL(defaultEndpoint);
        // hostname attribute in endpointUrl will return 'contoso.documents.azure.com'
        if (endpointUrl.hostname) {
            const hostnameParts = endpointUrl.hostname
                .toString()
                .toLowerCase()
                .split(".");
            if (hostnameParts) {
                // globalDatabaseAccountName will return 'contoso'
                const globalDatabaseAccountName = hostnameParts[0];
                // Prepare the locationalDatabaseAccountName as contoso-EastUS for location_name 'East US'
                const locationalDatabaseAccountName = globalDatabaseAccountName + "-" + locationName.replace(" ", "");
                // Replace 'contoso' with 'contoso-EastUS' and
                // return locationalEndpoint as https://contoso-EastUS.documents.azure.com:443/
                const locationalEndpoint = defaultEndpoint
                    .toLowerCase()
                    .replace(globalDatabaseAccountName, locationalDatabaseAccountName);
                return locationalEndpoint;
            }
        }
        return null;
    }
}
function normalizeEndpoint(endpoint) {
    return endpoint
        .split(" ")
        .join("")
        .toLowerCase();
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const url = URL;

// Copyright (c) Microsoft Corporation.
function checkURL(testString) {
    return new url(testString);
}

/**
 * Provides a client-side logical representation of the Azure Cosmos DB database account.
 * This client is used to configure and execute requests in the Azure Cosmos DB database service.
 * @example Instantiate a client and create a new database
 * ```typescript
 * const client = new CosmosClient({endpoint: "<URL HERE>", auth: {masterKey: "<KEY HERE>"}});
 * await client.databases.create({id: "<datbase name here>"});
 * ```
 * @example Instantiate a client with custom Connection Policy
 * ```typescript
 * const connectionPolicy = new ConnectionPolicy();
 * connectionPolicy.RequestTimeout = 10000;
 * const client = new CosmosClient({
 *    endpoint: "<URL HERE>",
 *    auth: {masterKey: "<KEY HERE>"},
 *    connectionPolicy
 * });
 * ```
 */
class CosmosClient {
    constructor(optionsOrConnectionString) {
        if (typeof optionsOrConnectionString === "string") {
            optionsOrConnectionString = parseConnectionString(optionsOrConnectionString);
        }
        const endpoint = checkURL(optionsOrConnectionString.endpoint);
        if (!endpoint) {
            throw new Error("Invalid endpoint specified");
        }
        optionsOrConnectionString.connectionPolicy = Object.assign({}, defaultConnectionPolicy, optionsOrConnectionString.connectionPolicy);
        optionsOrConnectionString.defaultHeaders = optionsOrConnectionString.defaultHeaders || {};
        optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.CacheControl] = "no-cache";
        optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.Version] =
            Constants.CurrentVersion;
        if (optionsOrConnectionString.consistencyLevel !== undefined) {
            optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.ConsistencyLevel] =
                optionsOrConnectionString.consistencyLevel;
        }
        optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.UserAgent] = getUserAgent$1(optionsOrConnectionString.userAgentSuffix);
        const globalEndpointManager = new GlobalEndpointManager(optionsOrConnectionString, (opts) => __awaiter(this, void 0, void 0, function* () { return this.getDatabaseAccount(opts); }));
        this.clientContext = new ClientContext(optionsOrConnectionString, globalEndpointManager);
        this.databases = new Databases(this, this.clientContext);
        this.offers = new Offers(this, this.clientContext);
    }
    /**
     * Get information about the current {@link DatabaseAccount} (including which regions are supported, etc.)
     */
    getDatabaseAccount(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.clientContext.getDatabaseAccount(options);
            return new ResourceResponse(response.result, response.headers, response.code);
        });
    }
    /**
     * Gets the currently used write endpoint url. Useful for troubleshooting purposes.
     *
     * The url may contain a region suffix (e.g. "-eastus") if we're using location specific endpoints.
     */
    getWriteEndpoint() {
        return this.clientContext.getWriteEndpoint();
    }
    /**
     * Gets the currently used read endpoint. Useful for troubleshooting purposes.
     *
     * The url may contain a region suffix (e.g. "-eastus") if we're using location specific endpoints.
     */
    getReadEndpoint() {
        return this.clientContext.getReadEndpoint();
    }
    /**
     * Used for reading, updating, or deleting a existing database by id or accessing containers belonging to that database.
     *
     * This does not make a network call. Use `.read` to get info about the database after getting the {@link Database} object.
     *
     * @param id - The id of the database.
     * @example Create a new container off of an existing database
     * ```typescript
     * const container = client.database("<database id>").containers.create("<container id>");
     * ```
     *
     * @example Delete an existing database
     * ```typescript
     * await client.database("<id here>").delete();
     * ```
     */
    database(id) {
        return new Database(this, id, this.clientContext);
    }
    /**
     * Used for reading, or updating a existing offer by id.
     * @param id - The id of the offer.
     */
    offer(id) {
        return new Offer(this, id, this.clientContext);
    }
}

export { CosmosClient };
