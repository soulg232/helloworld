import './App.css';
import axios from 'axios';

function App() {
  return (
    <main className="App">

    <header className="App-header">
      <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className="App-logo" alt="logo" />
      <h4>
        why Git (not github) is AMAZING???
      </h4>
    </header>

      <div className="SideNav">
          <ul>
            <li className="link" onClick={()=>toggle('what')} >
              What it it
            </li>
            <li className="link" onClick={()=>toggle('why')}>
              Why use it
            </li>
            <li className="link" onClick={()=>toggle('api')}>
              API thingy
            </li>
          </ul>
        </div>

      <section className="Main" id="what">
        <h2>What is Git?</h2>
        <p>So, what is Git in a nutshell? This is an important section to absorb, because if you understand what Git is and the fundamentals of how it works, then using Git effectively will probably be much easier for you. As you learn Git, try to clear your mind of the things you may know about other VCSs, such as CVS, Subversion or Perforce — doing so will help you avoid subtle confusion when using the tool. Even though Git’s user interface is fairly similar to these other VCSs, Git stores and thinks about information in a very different way, and understanding these differences will help you avoid becoming confused while using it.</p>
      </section>
      
      <section className="Main hide" id="why">
        <h2>Why use it?</h2>
        <p>Git is the most commonly used version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to. Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source.</p>
      </section>
      
      <section className="Main hide" id="api">
        <h2>API thingy</h2>
        <div className="api">
            <input type="text" id="username"/>
            <button type="submit" id="submit" onClick={()=>runAPI()}>Submit</button>
            <h3 id="motivation">Please submit a name</h3>
        </div>
      </section>
    </main>

  );
}

const api = 'https://udrcyipg9l.execute-api.us-east-2.amazonaws.com';

function runAPI() {
  const name = document.getElementById('username').value;
  const data = {
    "name": name
   }

   axios
   .post(api, data)
   .then((res) => {
     document.getElementById('motivation').textContent = res.data.message;
   }).catch((err) => {
     document.getElementById('motivation').textContent = err;
   })
  
}

function toggle(id){
  ['what', 'why', 'api'].forEach(function(element){
    document.getElementById(element).classList.add('hide');
  })

  document.getElementById(id).classList.remove('hide');
}

export default App;
