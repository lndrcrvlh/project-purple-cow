* I'm deciding to go with a ReactJS application for this build, more specifically one created with create-react-app as it easily handles the Must Haves 1,4, and 5. 
* Then I'll create a functional component that will render a button, and the count retreived from the API and key provided in Must Have 2 and 2a
* This component will be resuable, but there is some question as to what the behavior of the component should be given multiple instances.
*  Does each instance have its own state? If I click on the button, will two counts appear? Will those counts be the same? Will the API be called twice or just once?
*  This might be handled by further breaking down the component into a count component and a button component, or with keys for each instance - or some other solution that escapes thought
*  I think this goes beyond the scope of the current project and will take some more time to iron out, so I'll just use whichever behavior is default and assume that only one instance will appear on the page at the moment

