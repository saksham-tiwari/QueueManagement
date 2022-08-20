import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toaster = () => {
    return (
        <div>
            <ToastContainer
            theme="colored"
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            closeOnClick />
        </div>
    )
}

export default Toaster;