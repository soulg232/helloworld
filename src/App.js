import './App.css';

function App() {
  return (
    <main className="App">

    <header className="App-header">
      <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className="App-logo" alt="logo" />
      <h3>
        why Git (not github) is AMAZING???
      </h3>
    </header>

      <div className="SideNav">
          <ul>
            <li>
              <a href="#" onClick={()=>toggle('what')} >What it it?</a>
            </li>
            <li>
              <a href="#" onClick={()=>toggle('why')} >Why use it?</a>
            </li>
            <li>
              <a href="#" onClick={()=>toggle('api')} >API thingy</a>
            </li>
          </ul>
        </div>

      <section className="Main" id="what">
        <h2>What is Git?</h2>
        <p>So, what is Git in a nutshell? This is an important section to absorb, because if you understand what Git is and the fundamentals of how it works, then using Git effectively will probably be much easier for you. As you learn Git, try to clear your mind of the things you may know about other VCSs, such as CVS, Subversion or Perforce — doing so will help you avoid subtle confusion when using the tool. Even though Git’s user interface is fairly similar to these other VCSs, Git stores and thinks about information in a very different way, and understanding these differences will help you avoid becoming confused while using it.</p>
      </section>
      
      <section className="hide" id="why">
        <h2>Why use it?</h2>
        <p>Git is the most commonly used version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to. Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source.</p>
      </section>
      
      <section className="hide" id="api">
        <h2>API thingy</h2>
      </section>
    </main>

  );
}


function toggle(id){
  var el = document.getElementById(id);
  var all = ['what', 'why', 'api'];
  var i = 0;

  while (i < 3) {
    document.getElementById(all[i]).classList.add('hide');
    document.getElementById(all[i]).classList.remove('Main');
    i++;
  } 

  el.classList.remove('hide');
  el.classList.add('Main');
}

export default App;
