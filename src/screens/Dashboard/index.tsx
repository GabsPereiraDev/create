import React from 'react';


import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserName,
    UserGreeting,
    UserWrapper,
    Icon

} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: "https://avatars.githubusercontent.com/u/86992261?v=4" }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>
                                Gabriel
                            </UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
        </Container>
    )
}