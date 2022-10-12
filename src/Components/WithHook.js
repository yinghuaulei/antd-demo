import {useNavigate} from "react-router-dom";

function withHook(Component) {
    Component.displayName = `withHook${getDisplayName(Component)}`
    return function LinkComponent() {
        const navigate = useNavigate()
        return <Component to={navigate}></Component>
    }
}

function getDisplayName(wrapComponent) {
    return wrapComponent.displayName || wrapComponent.name || 'Component'
}

export default withHook