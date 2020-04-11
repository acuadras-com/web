import React, { useState } from 'react'


const EditProfile = (props) => {
    return (
        <section className="default-container">
            <Container fluid>
                <Row>
                <div className="profile-picture" style={{ backgroundImage: `url(${shop.profilePicture})` }}></div>
                </Row>
            </Container>
        </section>
    )
}

export default EditProfile;