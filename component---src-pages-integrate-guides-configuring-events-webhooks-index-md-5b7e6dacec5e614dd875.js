(self.webpackChunkcc_libraries_api=self.webpackChunkcc_libraries_api||[]).push([[458],{7874:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(5007),n(4983)),r=n(9536),l=["components"],s={},d={_frontmatter:s},h=r.Z;function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.mdx)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"configuring-webhooks-for-created-cloud-libraries-events"},"Configuring Webhooks for Created Cloud Libraries Events"),(0,i.mdx)("p",null,"I/O Events makes it possible to listen for changes to Creative Cloud Libraries and get a notification when those changes occur. Developers can subscribe to ",(0,i.mdx)("em",{parentName:"p"},"create"),", ",(0,i.mdx)("em",{parentName:"p"},"delete"),", and ",(0,i.mdx)("em",{parentName:"p"},"update")," events for a user's Creative Cloud Libraries. This tutorial will walk through how to set up and configure your project to listen for Creative Cloud Libraries events."),(0,i.mdx)("h2",{id:"creative-cloud-library-event-type-descriptions"},"Creative Cloud Library Event Type Descriptions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Event Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Creative Cloud Library Created"),(0,i.mdx)("td",{parentName:"tr",align:null},'Triggers whenever a user creates a new Library including adding a public library to "Your Work"')),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Creative Cloud Library Deleted"),(0,i.mdx)("td",{parentName:"tr",align:null},"Triggers when a user deletes a Library")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Creative Cloud Library Updated"),(0,i.mdx)("td",{parentName:"tr",align:null},"Triggers whenever there is a change to a Library including an element being added/deleted/updated or metadata of a Library being changed")))),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note: Currently there is no way to listen for element-level changes only on a Library. This is on the roadmap.")),(0,i.mdx)("h2",{id:"before-you-start"},"Before you start"),(0,i.mdx)("p",null,"Subscribing to Adobe I/O Events requires a URL that can be publicly accessible by the Events service. That means the URL provided for the Webhook URL in the Adobe Developer Console needs to be accessible via the internet. For doing local testing, this tutorial uses ",(0,i.mdx)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," which provides a publicly addressable URL to a locally running service."),(0,i.mdx)("h3",{id:"technology-used"},"Technology Used"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://ngrok.com/"},"ngrok")," which requires a free account"),(0,i.mdx)("li",{parentName:"ul"},"Node and NPM to run the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobeio/io-event-sample-webhook"},"sample webhook project"))),(0,i.mdx)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Clone the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobeio/io-event-sample-webhook"},"I/O Events Sample Webhook project")," into a local directory"),(0,i.mdx)("li",{parentName:"ul"},"Create an ",(0,i.mdx)("a",{parentName:"li",href:"https://ngrok.com/"},"ngrok")," account then ",(0,i.mdx)("a",{parentName:"li",href:"https://ngrok.com/download"},"download and install ngrok"))),(0,i.mdx)("h2",{id:"development-steps"},"Development Steps"),(0,i.mdx)("h3",{id:"1-preparing-the-webhook-urls"},"1. Preparing the Webhook URLs"),(0,i.mdx)("p",null,"When creating an Event Registration, Adobe I/O Events will send a challenge to the given Webhook URL before sending it events. So a valid Webhook URL needs to be set up and defined before creating the registration. In production, this URL will be a publicly accessible URL that responds correctly to the challenge. This tutorial will be using ngrok."),(0,i.mdx)("p",null,"Open a terminal window to the location where the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobeio/io-event-sample-webhook"},"I/O Events Sample Webhook project")," was cloned. In that directory, run"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm start\n")),(0,i.mdx)("p",null,"This will create a local service that responds correctly to the I/O Events challenge and will show logging information about events received. Once running, it can be accessed at http://localhost:3000. Browse to that URL. In the webhook URI input box, put ",(0,i.mdx)("inlineCode",{parentName:"p"},"libraries"),' and press the "Connect" button. This will setup a webhook URL and will display logging information whenever an events call is made. The logging box should say ',(0,i.mdx)("em",{parentName:"p"},"Connected to: http://localhost:3000/webhook/libraries"),"."),(0,i.mdx)("p",null,"The next step is to make it available to the internet using ngrok. Open another terminal window in the location where ngrok was installed and run"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"}," ./ngrok http 3000\n")),(0,i.mdx)("p",null,"That should result in an output that looks like this"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"Session Status                online\nAccount                       <Your Name>\nVersion                       2.3.35\nRegion                        United States (us)\nWeb Interface                 http://127.0.0.1:4040\nForwarding                    http://a7ad21255b75.ngrok.io -> http://localhost:3000\nForwarding                    https://a7ad21255b75.ngrok.io -> http://localhost:3000\n")),(0,i.mdx)("p",null,"Note the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Forwarding")," URLs as these will be used to set up the event registration in the next step."),(0,i.mdx)("h3",{id:"2-create-event-registrations"},"2. Create Event Registrations"),(0,i.mdx)("p",null,"Creating the event registrations required for listening for Creative Cloud Libraries events happens in the Adobe Developer Console. Once logged in to the Developer Console, select the project currently used for your Creative Cloud Libraries integration."),(0,i.mdx)("p",null,'In the project, click "Add to Project" and select "Event". On the next screen, select "Creative Cloud Libraries" and push the Next button.'),(0,i.mdx)("p",null,"The next screen shows the different event types that are available. Applications can listen for one or more event types from a single webhook URL. Select all three event types: Creative Cloud Library Deleted, Creative Cloud Library Updated, and Creative Cloud Library Created, then push Next."),(0,i.mdx)("p",null,"User consent is required to listen for events on their Libraries, so developers need to define OAuth credentials for users to explicitly authorize that consent. To do that, developers need to define a set of OAuth credentials by providing a redirect URI and redirect URI pattern. More information about the OAuth flow is available in ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cc-libraries-api/api-docs/blob/master/tutorials/.how-to-get-access-tokens-with-oauth.md"},"How to get an Access Token with OAuth"),"."),(0,i.mdx)("p",null,"If the integration has an existing set of OAuth credentials, this information should already be filled out. If not, correct URIs for this tutorial are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Redirect URI: ",(0,i.mdx)("inlineCode",{parentName:"li"},"https://adobeioruntime.net/api/v1/web/io-solutions/adobe-oauth-playground/cb")),(0,i.mdx)("li",{parentName:"ul"},"Redirect URI Pattern: ",(0,i.mdx)("inlineCode",{parentName:"li"},"https://adobeioruntime\\\\.net"))),(0,i.mdx)("p",null,"Give the Event Registration a name and optionally a description. In the webhook URL field, enter the https line from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Forwarding")," output in previous step follwed by ",(0,i.mdx)("inlineCode",{parentName:"p"},"/webhook/libraries"),". It should look something like ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://a7ad21255b75.ngrok.io/webhoook/libraries"),'. When finished, press "Save Configured Events".'),(0,i.mdx)("p",null,'On the next screen, a successful setup will show the status of "Active" under Registration Details. The logging information in the Webhook app running on http://localhost:3000/ should show a single ',(0,i.mdx)("inlineCode",{parentName:"p"},"GET")," request with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"challenge")," query param."),(0,i.mdx)("h3",{id:"3-authorizing-events"},"3. Authorizing Events"),(0,i.mdx)("p",null,"As mentioned, in order to receive a user's events, the user needs to explicitly authorize an application to listen for events via an OAuth flow. The next step is to set up that authorization. This example will use the ",(0,i.mdx)("a",{parentName:"p",href:"https://adobeioruntime.net/api/v1/web/io-solutions/adobe-oauth-playground/oauth.html"},"OAuth Playground")," but any method of initiating the OAuth flow can be used."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note: When using OAuth to call APIs, an access token is generated and that access token is passed in the header to successfully call the API. In the case of Events, the access token isn't used. I/O Events registers the authorization and Events will be sent to the application until the user revokes their consent.")),(0,i.mdx)("p",null,"To initiate the consent workflow, open a new browser window and browse to ",(0,i.mdx)("a",{parentName:"p",href:"https://adobeioruntime.net/api/v1/web/io-solutions/adobe-oauth-playground/oauth.html"},"https://adobeioruntime.net/api/v1/web/io-solutions/adobe-oauth-playground/oauth.html"),'. Find the integration\'s API key by selecting the "Credentials" item on the page confirming the Event Registration, copy the Client ID, and paste it in the API Key field of the OAuth Playground. Do the same for the client secret. In the "Scopes" field, add ',(0,i.mdx)("inlineCode",{parentName:"p"},"creative_sdk,profile,address,AdobeID,email,cc_files,cc_libraries")," so that it reads ",(0,i.mdx)("inlineCode",{parentName:"p"},"openid,creative_sdk,profile,address,AdobeID,email,cc_files,cc_libraries"),' then press the "Generate Tokens" button.'),(0,i.mdx)("p",null,'The OAuth Playground will show an Adobe login screen. Login with a valid username and password and then hit "Allow Access" to allow the application to listen for events from the authorized account.'),(0,i.mdx)("h3",{id:"4-testing-and-verifying-events"},"4. Testing and Verifying Events"),(0,i.mdx)("p",null,"Now the webhook has been configured successfully and an account has authorized the sending of events to the specified webhook URL. Any changes to Libraries in that account will trigger events."),(0,i.mdx)("p",null,"To test, browse to ",(0,i.mdx)("a",{parentName:"p",href:"https://assets.adobe.com/public/06cb8dc3-921f-4be6-64fa-f04de9b0a752"},"https://assets.adobe.com/public/06cb8dc3-921f-4be6-64fa-f04de9b0a752"),' in the same browser that was used to initiate the OAuth flow. Once loaded, click the "Copy to your Work" button. This will trigger a ',(0,i.mdx)("em",{parentName:"p"},"create")," event."),(0,i.mdx)("p",null,"The Webhook app (http://localhost:3000/) should now show a ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," request that includes a JSON ",(0,i.mdx)("inlineCode",{parentName:"p"},"body")," with information about the event including what kind of event was triggered (",(0,i.mdx)("inlineCode",{parentName:"p"},"event:action"),"), the id of the newly created Library (",(0,i.mdx)("inlineCode",{parentName:"p"},"repo:id"),"), and the user who caused the event to trigger (",(0,i.mdx)("inlineCode",{parentName:"p"},"repo:modifiedBy"),")."),(0,i.mdx)("p",null,'This information can also be seen in the Developer Console by selecting the "Debug Tracing" tab after selecting the event registration on the Project screen. (If the "Debug Tracing" section is greyed out, try refreshing the page). The Debug Tracing area provides the ability to filter by status code as well as information about how long the request took and the headers/payload that were sent with the event.'),(0,i.mdx)("p",null,"To trigger an update event, rename the Library. Deleting the library will trigger a delete event."),(0,i.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,i.mdx)("p",null,"This tutorial provides a working local application to receive (and log) events. When re-implementing this in production, remember the need to respond to the challenge and get user authorization. More information can be found in the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/readme.md"},"Adobe I/O Events documentation"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-guides-configuring-events-webhooks-index-md-5b7e6dacec5e614dd875.js.map