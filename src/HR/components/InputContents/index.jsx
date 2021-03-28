import React, {Component} from 'react';
import {Breadcrumb, Divider, Layout, PageHeader }from "antd";
import CollectionsPage from "./CollectionsPage";
import SuccessCreate from "./SuccessCreate";

const { Content } = Layout;

class InputContents extends Component {

    state = {isSuccess:false,info:{name:'未知',id:'未知',sex:'未知',nationality:'未知',nation:'未知',degree:'未知',major:'未知',College:"未知",graduatedTime:"未知"}}

    success = (ok,inf) => {
        this.setState({isSuccess:ok,info:inf})
    }

    render() {
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>录入新员工信息</Breadcrumb.Item>
                        <Breadcrumb.Item>录入表单</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <PageHeader
                                className="site-page-header"
                                onBack={()=>this.props.history.goBack()}
                                title="员工信息录入"
                                subTitle="点击按钮录入新员工的基本信息"
                            />
                            <CollectionsPage success={this.success}/>
                            <Divider/>
                            <SuccessCreate isSuccess={this.state.isSuccess} info={this.state.info}/>
                        </Content>
                    </Layout>
                </Content>
            </div>
        );
    }
}

export default InputContents;
