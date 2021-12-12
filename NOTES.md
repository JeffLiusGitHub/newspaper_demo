# Notes / Documentation

## 1. For the first question, the main difficulty is changing the JSON API into rendered HTML pages. I found, from the API, some elements have children and some do not. If an element has children I should also get into it to get the data from it. Thus, I use an iteration function. 
The main idea getting tag type parameters and content from the data to build an element.  If it also has a child, call the function again. 
I have ever tried the createElement function. But finally, I choose the current method because it is more obvious. I also create an object called tagNameToComponent, to check the type and use the component I built. 
Because image and synopsis are in the different tables, I also pass them into the function. 
The layout part is not that difficult as I can refer to value the demo website. Also, I set the media query to the page to fit the responsive design. 

## 2. Adding third-party embeds is not that difficult if the requirement is to provide a link only. I get the URL from the data and pass it to the href to implement the requirement. 
For future third-party embeds, I have set the condition to judge whether the URL includes some patterns like Instagram or Twitter. After recognizing the embedded providers, I can pass the URL to the corresponding component to render the element. 

## 3. I found the data in the synopsis to implement the Key-points part. I get the whole synopsis and separate it into an array. Then mapping the Li element with data. 

## 4. I get the website URL from the data and display it on the page. I also render a button and set onClick to alert the information. 

## Additional Notes

**Hints:**
- Are there any accessibility enhancements that could be made?

Yes, there are. Firstly, fonts sizes cannot be too small. The developer should use colour-blindness and eye-friendly colour when designing the page. 
Ensure site navigation via a keyboard can be operated by setting focus state.
Ensure we have an Alt tag for the image so that users can know what is the picture talks about or even the machine will read the alt tag for the user. 
Also, by using ARIA properties components can be passed to the assistive technologies for the user to use it.


- How could you handle when a new component is added that isn't supported by the website?

There are two options. give the iteration function a default type like div. But it depends on the function of the component.
The second option is to set key-value pairs like what I implement to change.
If a new component isn't set not in this object, we can use the default case to display something like (new type found).
Then I will modify the existing structure to fit the new component. 

- Is there any data returned in the API response that could improve the functionality of the website?

The current API may be using a SQL database.
So I should use some id to query in another table.
If we change it to NoSQL, which is not normalized, the query will be faster. 

**Questions:**
- How could you ensure bundle size is kept to a minimum and doesn't include code that's not required for the specific page?

Webpack bundle files and code splitting the code into chunks, so that file sizes will be minimized and browsers can run it when needed.

- Given the requirement to add an additional third-party embed, could this be done in a few simple steps? How would you explain to a developer how to add a YouTube Video embed.

Yes, it could.
Firstly, fetch the API data and get the specific URL and other useful information from the data. 
Secondly, set up a component with the URL as input. 
Thirdly, phrase your URL into https://www.youtube.com/embed/xxxx. Set the iframe tag and parameter src equal to your new URL. 
Finally, you can call the component when you need it on the page. 