Guin’s Site Audit Project: Mercari
Lighthouse

Start by making a copy of this document. You can use Google Docs (go to File -> Make a copy) or copy the text to the text editor of your choice.

Let’s get some practice auditing a site for accessibility. We can use a tool like Lighthouse, which has browser extensions for Firefox and Chrome. Install one of these extensions. This is often a step we’ll complete after implementation and right before taking the site live. 
Website Selection

Pick a website from the following list:

http://www.cabq.gov/
https://www.unm.edu/
https://www.ecoleducasse.com/en
https://www.benefit-plus.eu/en/
https://www.risenation.com.au/ 
https://elrayotequila.com/
https://www.starwars.com/ 
https://www.nhl.com/ 
https://www.shadylakesfishing.com/ 
https://glorybee.com/honey 
https://www.dickssportinggoods.com/ 
https://academicjournals.org/ 
https://www.mercari.com/ 
https://www.foodnetwork.com/

List the website you chose here:

Mercari: The Selling App
https://www.mercari.com/ 

For whichever site you chose, please only consider the link provided; you don’t have to analyze multiple pages on the same site.


Generate Report, Scores
Now, let’s use Lighthouse to generate a report on how well the website is doing. Since we haven’t quite learned about code yet, some of the terminology we’ll see might not be familiar to us. That’s okay, do your best to read up!

On your Lighthouse report, you’ll see four main categories: Performance, Accessibility, Best Practices, and SEO. Each one is given a score, and a score falls in the following ranges:


0 to 49 (red): Poor
50 to 89 (orange): Needs Improvement
90 to 100 (green): Good
These colors stay consistent in terms of category throughout Lighthouse. Provide the scores of the site you’ve chosen here (screenshot is great) for both the desktop and mobile versions:
DESKTOP

MOBILE

Metrics
You’ll start off by seeing the results of specific tests. This section is sometimes called Metrics, Field Data, or Lab Data. Pick two of the metrics included here. Define what the metric is measuring and provide their values for the desktop version of the site you’ve chosen along with the classification (poor / needs improvement / good). How do the metrics you’ve chosen change for the mobile version?

Metrics & Definitions
First Contentful Paint marks the time at which the first text or image is painted
Time to interactive is the amount of time it takes for the page to become fully interactive

DESKTOP
First Contentful Paint			0.3s
Time to Interactive: 				0.3s

MOBILE
First Contentful Paint			3.7s
Time to Interactive: 				25.5s

Mobile performance lags far behind the desktop version based on these tests.
Opportunities
The Opportunities section has detailed suggestions and documentation on how to implement them. Provide the top three items from this section for the desktop version. Then, provide the top three items for the mobile version. For each item, say what it is and how to fix it. If two or more of these items are too similar (e.g. “Remove unused JavaScript” and “Remove CSS”), continue down the list until you provide three unique opportunities. 

DESKTOP
N/A (no opportunities)

MOBILE
Remove Unused Javascript				3.6s saved
Scripts could be running that are unnecessary. Analyze the “bundle” to detect unused code, then remove unused and unneeded libraries
Eliminate Render-blocking resources		0.89s saved
Test lists all URLs blocking the “first paint” of your page. By inlining critical resources, deferring non-critical resources, and removing anything unused
Spot Checks

Next, let’s do a couple spot checks for common errors in site design to get some practice. The exercises here are not exhaustive, but represent examples of good habits to design your websites around.
Contrast Checking

Let’s start by checking the text and background contrast. Use the browser tools (right-click -> Inspect) to find the primary font color and background colors. Fill in the table below with the colors. Then, go to https://whocanuse.com/ and see how these color combinations perform in terms of accessibility. AA is the WCAG standard that is legally required for most websites. What is the minimum amount of contrast to pass the WCAG AA rating? Evaluate each pair of colors you recorded and list any vision type groups shown that the color combination receives a fail on. Use this information to fill out the table below, replacing the sample row as you go.

Note: include at least three and no more than five unique combinations. 

Text color
Background color
Contrast level
WCAG Grading
Vision type groups failed 
#FFFFFF
#5e6df2
4.25:1
FAIL
Regular, Protanomoly, Protanopia, Deuteranomaly, Deuteranopia, Tritanomaly, Tritanopia, Cataracts, Glaucoma, Low Vision, Direct Sunlight, Night Shift Mode
#4c4c4c
#FFFFFF
8.59:1
AAA
N/A (no failures)
#FFFFFF
#F47900
2.77:1
FAIL
Regular, Protanomoly, Protanopia, Deuteranomaly, Deuteranopia, Tritanomaly, Tritanopia, Cataracts, Glaucoma, Low Vision, Direct Sunlight, Night Shift Mode, Achromatomaly, Achromatopsia

Keyboard Navigation
Every site should be completely navigable using only the keyboard. For the site you’ve chosen, try to navigate just using ←↑↓→ TAB, SHIFT+TAB, ESC, and ENTER keys. Are you able to access any functionality on the page? Can you get to any and all links? When an element is in focus during your keyboard navigation, is it visibly highlighted? If there are any videos or interactive elements, can you use them? Provide your findings below, including any elements of the site that fail this test i.e. that can’t be reached by keyboard navigation alone:

All keyboard navigation options appear to work, but it is very difficult to see what link you’re on using the TAB and ENTER keys
Descriptive Links
Look at the links on the page. Are they descriptive of their contents? Here’s an example of what this means:

Take note of any links with text that is NOT descriptive of the link’s contents. List them below along with a proposed change for the text. Additionally, check out the mobile version of the site. Are all of the links sufficiently large for the user to tap on? List any links that are too small on the mobile version.

Most all links are all appropriately descriptive - the only exception being user-created content, i.e., poorly described item input by a seller
Some link text is quite small, especially on the mobile version, which may be challenging for some users

Conclusion
Congrats, you made it through a subset of a full site audit! Were there any surprises along the way? What was the most interesting takeaway? Did your website perform better or worse than expected? Provide your answers here (3-4 sentences at most total). 

Surprising takeaways: I was completely surprised by the color-contrast FAILs - the colors appear to have lots of contrast to me, but two spot checks failed and one failed entirely
Interesting takeaway: the stark performance differences between the desktop and the mobile sites
Also of interest was the difference, albeit very slight, between the SEO ratings from the desktop to mobile versions. I wouldn’t have expected that at all.
Useful Links

https://web.dev/performance-scoring/
https://www.merkleinc.com/emea/blog/lighthouse-v6-guiding-your-way-fast-site 
https://altitudemarketing.com/blog/easy-guide-website-accessibility/ 
https://medium.com/@krisrivenburgh/the-ada-checklist-website-compliance-guidelines-for-2019-in-plain-english-123c1d58fad9 
https://myaccessible.website/blog/wcaglevels/wcag-levels-a-aa-aaa-difference
