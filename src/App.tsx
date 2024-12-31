import './App.css'
import {Search} from './Search/Search';
import {SearchProvider} from "./store/SearchContext.tsx";

function App() {

    return (
        <SearchProvider>
        <div
            style={{
                display: "flex",
                position: 'relative',
                width: '100%',
                justifyContent: 'center',
            }}>
            <Search/>
        </div>
        </SearchProvider>
    )
}

export default App
