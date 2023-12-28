console.log('How the web works');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
$(document).ready(function(){
    $('h1').on('mouseenter',function(){
        $(this).addClass('hover');
    });
    $('h1').on('mouseleave',function(){
        $(this).removeClass('hover');
    });
});
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//                                            HOW THE WEB WORKS

// ----------------------------------------------------------------------------------------------------------------

// What actually happens when you type a url into a browser? 

// --------------------------------------------------------------

//      NETWORKS

// --------------------------------------------------------------

// A network is a series of computers that can communicate with each other and share information. You can have
//      private networks, cellphone networks, and localized networks for homes, schools, and companies.

// --------------------------------------------------------------

//      INTERNET

// --------------------------------------------------------------

// The Internet is essentially just a very, very big network, that any computer can theoretically enter. It's
//      made up of several smaller networks connected to each other.

// --------------------------------------------------------------

//      WORLD WIDE WEB

// --------------------------------------------------------------

// The world wide web is what most people think of when they hear 'internet', it's the collection of websites,
//      video streaming and file sharing that takes place online. What we think of as 'websites' are just files
//      being shown.

// --------------------------------------------------------------

//      IP ADDRESSES

// --------------------------------------------------------------

// The basis of network communications is Computer A sending information to Computer B. But as networks grow
//      larger, we have to worry about Computers C, D, E, and so on. By the time you get to the insane scale of 
//      the Internet, there's an immeasurable amount of computers to keep track of. The way we can connect 
//      so many computers together in a network is by using something called a 'router'.

// A router is a central point that multiple computers connect to, so rather than every computer in a ten
//      computer network having to connect to nine other computers, they only need to connect to one router,
//      which in turn connects to each of the computers in the network, as well as other routers. But even after
//      alleviateing the issue of connecting the billions of computers, we run into the issue of differentiating
//      each computer to know where to send information.

// To account for this, each computer on a network is given an IP address. Each IP address is four numbers 
//      between 0 and 255, connected by .'s. 

// --------------------------------------------------------------

// Early in the internet's life, there were only a handful of colleges, military operations, and think tanks
//      that had computer networks, and each of them had a host number. But even then, it got annoying trying
//      to remember '11' for 'Stanford' and '9' for Harvard, so they were given 'designators' of 'STAN' and
//      'HARV' instead, and the computer would be able to convert those strings into the appropriate numbers.

// As the internet grew, it would eventually become completely untenable to have a small four character
//      designator for every computer, so the IP address as implemented. That being said, it's not reasonable
//      for a human to remember the random, up to 24 character IP address of every computer they want to send
//      and receive data to and from, so we devised a more realistic way to access computers and files.

// --------------------------------------------------------------

//      DNS

// --------------------------------------------------------------

// When you want to access someone else's server, you don't type their IP address into a browser, you type in
//      a 'hostname'. Host names are nicknames for servers, in a format you're already familiar with:

//          "website.com"          or          "computer-a.site.com"

//      So this goes back to our original question, of what happens when you type a url into a browser.
//      There's effectively a phonebook for the web called 'Domain Name System'. When you type an address into
//      your browser, the first place it's going to look is locally on your computer in what's called a 
//      computer cache, then on the router to see if it's connected to another computer on the network, and 
//      finally in a DNS server, which will resolve the hostname into an IP address and send it back to you.

// You can see how each website has an IP address by using the 'dig' command on your terminal. It will return
//      a ton of information about the website, including the IP address:

//          "dig google.com"     will return the IP addrss 142.250.189.142

// --------------------------------------------------------------

// One important IP address to keep track of is 127.0.0.1, which will always be the computer you're currently
//      using. You can use this if you want to make sure you're only referencing your own computer. This IP 
//      address is called localhost. If you open the html file attached to this in your browser, you can check
//      the url bar and see it starts with "localhost", because it's open from this computer, not the internet.

// ----------------------------------------------------------------------------------------------------------------

//      ANATOMY OF A URL

// --------------------------------------------------------------

// Universal Resource Locators are the 'addresses' of web content. They're made up of a protocol, hostname, port,
//      resource, and query. For example:

//          http://site.com/some/page.html?x=1

// Port:            hostname            port            resource            query
//----------        ------------        ---------       -------------       ---------
// http             site.com            80              /some/page.html     ?x=1

// One thing that probably stands out is the 'port', since there's no 80 anywhere in the link. Each sever has 
//      65,535 unique ports that you can talk to, but the port generally isn't specified because each server has
//      a default port for http requests, which is 80, and https, which is 443. You won't need to specify which port
//      you want to talk to unless you want a specific port, which is incredibly rare unless you're testing your own
//      server.

// A resource talks to a 'web server' program, which will occasionally reference an actual file on the other computer,
//      but typically will dynamically generate a page.

// The query is an optional addition that will include things like search terms and information from forms. The 
//      server has access to this data and will often change the webpage accordingly. JavaScript will occaisionally
//      make changes based on query data as well. Multiple instances of query data can be separted by '&'.

// ----------------------------------------------------------------------------------------------------------------

//      HTTP

// --------------------------------------------------------------

// One thing to note at the beginning of this section is that there are several types of servers, but for the 
//      purpose of this discussion, we're talking about web servers.

// --------------------------------------------------------------

// When you open an html file on a browser, the default is to use the file protocol, which you can see in the url
//      bar as 'localhost'. But some of the code doesn't work the same in file protocol as it does in http, so it's
//      useful to know how to set up a simple http server for testing.


// With Python 3 installed, you can create a server by having your html, css, and Javascript files together in
//      a folder and entering "python3 -m http.server" into your terminal. Alternately, with the 'Live Server'
//      VSCode extention, you can right-click the file in your explorer and select "Open in Live Server".

// --------------------------------------------------------------

//      REQUESTS

// --------------------------------------------------------------

// When you navigate a browser, you're making several 'requests' of the code. A request will typically return a
//      bunch of html code that can include things like links. For instance, opening this html file will mean a
//      request is sent for these js and css files. However, accessing those files is just one request, and 
//      actually implementing the code on them is another. When you access a webpage on a browser, that browser
//      makes multiple requests asychronously and assembles the final result for you, which you can see in the
//      'Network' tab in your console.

// --------------------------------------------------------------

//      GET VS POST

// --------------------------------------------------------------

// We can manually make requests with various command methods as well, the two most common being 'post' and
//      'get'. 'Get' makes request and produces no side effects (doesn't change any server data), and is usually
//      passed through the 'query' part of the url. It will usually change behavior or rearrange the order of
//      html elements, but won't make any meaningful change to what any of the content is or does. They often
//      change through user actions, such as opening new links or submitting certain forms.

// A 'post' is a request that does include side effects, changing the server data. It usually entails adding 
//      something to the webpage, such as an image or text. These requests are typically made through the body of
//      the webpage rather than by searching through links. There are sub-categories of posting and getting 
//      information, but generally the differences boil down to getting something from the server or changing 
//      the server.

$('p').text(`How Web Works Exercise

-----------------------------------
1. HTTP
	Hypertext transfer protocol, it takes in the html code and
	converts it into something readable on a browser
2. URL
	Universal Resource Locator, it's like an address for a webpage
	that states a protocol, hostname, port, resource, and query.
3. DNS
	Domain Name System, it takes things like IP addresses and other
	raw data and converts it into more readable text to make a
	webpage name.
4. Query String
	The part of the url that accounts for any 'get' requests you've
	added to the webpage, such as sorting elements in a particular
	order, submitting a search, or changing a setting.
5. HTTP Verbs
	Get - A 'get' request is a request that doesn't change any 
	server data, as in it doesn't create or delete any elements,
	and is often done by the user as they navigate a webpage.
	Post - A 'post' request is when the user adds content to a 
	webpage, such as an image, blog post, status update, etc, and
	leaves a side effect in the server data by adding elements.
6. HTTP Header
	An http header gives extra information to a client about the
	server's protocol and help the server and client communicate.
	A request header can be something like the domain name of the
	server (host), credentials to authenticate the client, or 
	information about the user's previous activities, preferences,
	and interactions (cookies). A response server can specify what
	type of media is being sent to the client (content-type), the
	software being used by the server, or letting the client know
	that a cookie is being created.
7. Typing a link
	When you type http://somesite.com/some/page.html into the 
	browser, the browser will first check to see if the IP for 
	this website is stored in its cache, and if not, it will
	initiate a DNS lookup to search for it. Once the IP is found,
	it will connect to the appropriate server. From there, it will
	send a 'get' request to the server for the resource "/some/
	page/html", including headers http headers. The server will
	process that request and retrieve the resource, then prepare a
	response. That response is sent back to the browser, including
	the headers and appropriate content (html, css, js, etc). The
	browser then processes the response and renders the page, 
	parsing the html, stylesheets, and scripts, then displays the
	visuals of the page.`);