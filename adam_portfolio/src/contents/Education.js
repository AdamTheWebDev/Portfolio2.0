import React, { Component } from 'react';

import Widecard from '../components/Widecard';

class Education extends Component {

render(){
    return(

        <div>

            <h1>My Education and Certifications</h1>
            <Widecard title="Bachelors of Science - Business Management" where="Farmingdale State University"></Widecard>

            <Widecard title="Microsoft Certified: Azure Developer Associate" where="Microsoft"></Widecard>

        </div>

    )
}

}

export default Education