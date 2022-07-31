/*

Ideas:

- `policy-ids.json` is an array of string policy IDs (string in case there are padded zeroes)
- `policies/` contains saved policies, in XML (and HTML?) format
- scrape https://www.tbs-sct.canada.ca/pol/arch-eng.aspx for list of archived policy IDs
	- these shouldn't change—once scraped, we’ll assume it’s good (maybe check back once a year or something)
	- load the HTML directly, all the data is nicely in `table#results-table`
	- add them to the list of policy IDs
- scrape https://www.tbs-sct.canada.ca/pol/hierarch-eng.aspx for policy IDs listed hierarchically
	- this isn’t all the policies! e.g., the access to information and privacy policies aren't listed here
	- add them to our list of policy IDs
- scrape https://www.tbs-sct.canada.ca/pol/a-z-eng.aspx for IDs listed alphabetically
- scrape https://www.tbs-sct.canada.ca/pol/modifications-eng.aspx for recent modifications
	- seems like sometimes a file is modified while retaining the same ID (e.g., https://github.com/sleepycat/policy_graph/blob/master/document_scraping/individual_policy_documents/policy_18310.xml vs recently modified https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=18310)
	- maybe all the files listed here, we force a re-look at the IDs listed, and just re-save (git diff will show if there's a substantial difference)
- for every policy we scrape, look for every policy referenced in the document (something like href=`doc-eng\.aspx\?id=[0-9]{1,5}$`)
	- add these to our overall list of policy IDs
- for each scrape, compare `policy-ids.json` to the policies scraped in `policies/` (or such), to see what we can skip or not
- for fun, why not also save (and parse) this... enormous list of defined terms?? https://www.tbs-sct.canada.ca/pol/glossary-lexique-eng.aspx
	- though it doesn't seem updated

*/