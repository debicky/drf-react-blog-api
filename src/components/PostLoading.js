import React from "react";

function PostLoading(Component) {
    return function PostLoadingComponent({ isLoading, ...props }) {
        return (
            <p style={{fontSize: '25px'}}>
                We are waiting for the data to load!...
            </p>
        )
    }
}

export default PostLoading;