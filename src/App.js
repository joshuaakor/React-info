import {Route, Routes} from 'react-router-dom';
import Fave from './pages/Fave';
import NewMeetups from './pages/Newmeetups';
import TotalMeetups from './pages/TotalMeetups';
import Layout from './components/layout/Layout';


function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/'  element = {<TotalMeetups/>}/>
                    <Route path='/Newmeetups' element = {<NewMeetups/>}/>
                    <Route path='/fave' element = {<Fave/>}/>
                    
                </Routes>
            </Layout>
            
        </div>
    );
}

export default App;