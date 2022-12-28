import './App.scss';
import Mainscreen from "./components/mainscreen/mainscreen";
import Navigation from "./components/navigation/navigation";
import Userlist from "./components/userlist/userlist";
import Form from "./components/form/form";
import {useWindowResize} from "./hooks/useWindowResize";
import {useEffect, useRef, useState} from "react";
import axios from "axios";



function App() {

    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this,
                args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [users, setUsers] = useState([]);
    const [mainUrl, setMainUrl] = useState('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6');
    const [positions, setPositions] = useState([]);
    const [formActive, setFormActive] = useState(false);
    const [token, setToken] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: 0,
        photo: null,
        position_id: 0
    });


    const onFormSubmit = (e) => {
        e.preventDefault();
        postUser();
    }

    const handleUsers = () => {
        axios.get(mainUrl).then((response) => {
            const compare = response.data.users.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
            setUsers((users) => ([...users, ...compare]));
            return setMainUrl(response.data.links.next_url);
        })
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token').then((response) => {
            setToken(response.data.token);
        })
    }

    const onCheck = (event) => {
        formData.position_id = event.target.id;
    }

    const handleFile = event => {
        formData.photo = event.target.files[0];
        const uploadFile = event.target.files[0];
        const dir = document.createElement("div");

        document.querySelector('.upload_field').insertAdjacentHTML( 'beforeend', `
            <span class="file_upload_wrapper">
                <span class="file_name">${uploadFile.name}</span>
            </span>`
        );
    };

    const postUser = () => {
        const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
        const config = {
            headers: {
                'Token': token,
                'content-type': 'multipart/form-data'
            }
        }
        return  axios.post(url, formData, config).then(() => {
            axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6').then((response) => {
                const compare = response.data.users.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
                setUsers(compare);
                return setMainUrl(response.data.links.next_url);
            })
        });
    }
    const handlerInputChange = (event) => {
            const { name, value } = event.target;

            setFormActive(() => (
                value == '' ? false : true
            ));
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
    }


    const handlePositions = (url) => {
        axios.get(url).then((response) => {
            setPositions(response.data);
        })
    }

    const window_type =
        width >= 320 && width <= 768 ?
            'mobile'
        : width > 768 ?
            'desktop'
        : false;

    useState(() => {
        handleUsers(mainUrl);
        handlePositions('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
    });

    const debouncedHandleResize = debounce(() => {
        if (width > window.innerWidth + 10 || width < window.innerWidth - 10) {
            setWidth(window.innerWidth)
        }
    }, 10);

    useWindowResize(debouncedHandleResize);

    return (
        <div className="_container">
            <Navigation type={window_type} />
            <Mainscreen type={window_type} />
            <Userlist type={window_type} url={mainUrl} handleUsers={handleUsers} data={users}/>
            <Form handleFile={handleFile} onCheck={onCheck} formActive={formActive} postUser={postUser} onSubmit={postUser} onChange={handlerInputChange} positions={positions} type={window_type} />
        </div>
    );
}

export default App;