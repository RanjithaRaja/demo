import React, {Component} from "react";
import { connect } from "react-redux";
import { getHomeData } from "../action/homeAction";

class Home extends Component{
    constructor(){
        super()
        this.state = {
           
        }
    }

    componentDidMount(){
        this.props.getHomeData()
    }

    render(){
        console.log(this.props.data)
        return(
            <div>
                <h1>Home</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data != undefined && this.props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.HomeReducer.homeData
})

const mapDispatchToProps = (dispatch) => ({
    getHomeData: () => dispatch(getHomeData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);