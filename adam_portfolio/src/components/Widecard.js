import React, {Component} from 'react';

class Widecard extends Component {

    render(){
        return(
            <div>
                <div>

                    <h3>{this.props.title}</h3>
                    <h4 class="secondtext">{this.props.where}</h4>

                </div>

            </div>
        )
    }

}

export default Widecard