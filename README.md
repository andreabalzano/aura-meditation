#Aura Meditation

This app allow users to set their custom meditation session. They can set the time, and if they want they can chose a background sound. All this in a simple amd clean UI. <br>
Once chosen  the time, will appear the play button, near the timer bubble. <br>
Once played, the timer will start and the play button will become a stop button. <br>
Finally, after pressing the stop button or ending the timer, the app will return to the initial state.

<h2>Resource used</h2>
<ul>
  <li><a href="https://html.spec.whatwg.org/">HTML</a></li>
 <li><a href="https://www.w3.org/TR/CSS/">CSS</a></li>
 <li><a href="developer.mozilla.org/it/docs/Web/JavaScript">JavaScript</a></li>
  <li><a href="https://react.dev/">React</a></li>
  <li><a href="https://redux.js.org/">Redux</a> , <a href="https://redux-toolkit.js.org/">Redux Toolkit</a> and <a href="https://react-redux.js.org/">React Redux</a></li>
 <li><a href="https://github.com/axios/axios">Axios</a></li>
 <li><a href="https://vitejs.dev/">Vite</a></li>
</ul>

<h2>How does it works</h2>
The app is build in React with Vite. <br>
The app states are managed with Redux. Every action that edit the state is managed with a Slice created in Redux Toolkit. The sliced are stored in the "features" folder. <br>
For access the various states in the elements is used The useSelector from React Redux. Also for edit a state with an action is used useDispatch always from React Redux. <br>
The app's components are stored in the "components" folder.<br>
Finally the app's assets (as images and styles) are stored in the "assets" folder. <br>
For styling is used the ".module.css" format. For created custom classes unique to every app's component. 

<h2>How to test the app</h2>
The project's source code is stored in this repository. <br>
You can try the working application here: https://andreabalzano.github.io/aura-meditation
