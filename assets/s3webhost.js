import { S3Client, GetBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
// const { S3Client, GetBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
const client = new S3Client(config);
const input = {
  // GetBucketWebsiteRequest
  Bucket: "practicewebsitenow", // required
  ExpectedBucketOwner: "512543510504",
};
const command = new GetBucketWebsiteCommand(input);
const response = await client.send(command);
// { // GetBucketWebsiteOutput
//   RedirectAllRequestsTo: { // RedirectAllRequestsTo
//     HostName: "STRING_VALUE", // required
//     Protocol: "http" || "https",
//   },
//   IndexDocument: { // IndexDocument
//     Suffix: "STRING_VALUE", // required
//   },
//   ErrorDocument: { // ErrorDocument
//     Key: "STRING_VALUE", // required
//   },
//   RoutingRules: [ // RoutingRules
//     { // RoutingRule
//       Condition: { // Condition
//         HttpErrorCodeReturnedEquals: "STRING_VALUE",
//         KeyPrefixEquals: "STRING_VALUE",
//       },
//       Redirect: { // Redirect
//         HostName: "STRING_VALUE",
//         HttpRedirectCode: "STRING_VALUE",
//         Protocol: "http" || "https",
//         ReplaceKeyPrefixWith: "STRING_VALUE",
//         ReplaceKeyWith: "STRING_VALUE",
//       },
//     },
//   ],
// };
