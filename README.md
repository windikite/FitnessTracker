My 48th assignment! This is the second project of the front end specialization modules. In this assignment I used Redux to provide globally usable state via the useSelector hook and edit that state indirectly by rolling out commands via the useDispatch hook. 

This app uses both code from in-class exercises/lessons as well as from my most recent e-commerce projects. Because much of the code was reusable from older exercises and the e-commerce website (with some tweaking) it was easy to expand the functionality to include validation, a success modal, and some easy navigation.  

The first thing done to support the functionality I needed in the app was to create the redux store using the configureStore method, creating a slice to handle the various exercise information, define its properties and then export the reducers to the rest of the app.  

Both a view exercises component and add exercise component was created to easily add and display new exercises. Each component utilizes the relevantly-named hook from the exercise slice to send commands to the dispatch, which handles the rest of the work. You can add and easily delete exercises on the Exercise Tracker page.  

As for the bonus task, I implemented a way to update exercises. I expanded the exercises slice to include an update method, provided a dropdown that allows for the selection of an exercise, and then a form to commit the update. Not only that, but I upgraded the site to also include validation before submitting both new exercises as well as updating them, and a success modal when one is successfully updated. 

Running this site should be easy, just install the dependencies with 'npm install' and then run 'npm run dev'. 