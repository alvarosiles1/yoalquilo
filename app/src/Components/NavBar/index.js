import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { SButtom, SHr, SNavigation, SText, STheme, SView } from 'servisofts-component';

export default class NavBar extends Component {
    static INSTACE = null;
    static open() {
        NavBar.INSTACE.fadeIn();
    }
    static close() {
        NavBar.INSTACE.fadeOut();
    }

    constructor(props) {
        super(props);
        this.state = {
            timeAnim: 500,
            isOpen: false,
        };
        NavBar.INSTACE = this;
        this.animSize = new Animated.Value(this.state.isOpen ? 1 : 0);
    }

    fadeIn() {
        this.setState({ isOpen: true });
        Animated.timing(this.animSize, {
            toValue: 1,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start();
    }

    fadeOut() {

        Animated.timing(this.animSize, {
            toValue: 0,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start(() => {
            this.setState({ isOpen: false });
        });
    }

    NavItem(props) {
        return <SView col={"xs-12"} center height={70} onPress={() => {
            NavBar.close();
            if(!props.url) return;
            SNavigation.navigate(props.url);
        }}>
            <SText fontSize={18} font={"Roboto"} >{props.label}</SText>
            <SHr height={16} />
            <SView col={"xs-11"} height={2} card></SView>
        </SView>
    }
    getNav() {
        return <SView col={"xs-8 sm-7 md-6 lg-4 xl-2.5"} height backgroundColor={STheme.color.background}
            style={{
                position: "absolute",
                left: this.animSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["-70%", "0%"]
                }),
            }}
        >
            <SView col={"xs-12"} height={100} style={{
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                backgroundColor: STheme.color.barColor,
            }}>

            </SView>
            <SHr height={16} />
            <this.NavItem label="Inicio" url={"/"}/>
            <this.NavItem label="Ajustes" url={"ajustes"}/>

        </SView>
    }
    render() {
        if (!this.state.isOpen) return <SView />
        return (
            <SView style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: STheme.color.text+"44",
            }}
                activeOpacity={1}
                onPress={() => {
                    if (this.state.isOpen) {
                        this.fadeOut();
                    } else {
                        this.fadeIn();
                    }
                }
                }>
                {this.getNav()}
            </SView>
        );
    }
}
