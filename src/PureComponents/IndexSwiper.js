import React from 'react'
import withHook from "../Components/WithHook";

class IndexSwiper extends React.PureComponent {
    toPath = (path) => {
        this.props.to(path)
    }

    render() {
        return <button onClick={this.toPath('login')}>路由跳转</button>
    }
}

const AilinComponent = withHook(IndexSwiper)

export default AilinComponent