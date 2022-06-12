
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Axios from 'axios';
import { Panel } from 'primereact/panel';



export  default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderData: [],
            renderTransactionData:[]
           
        };

        
    }

    componentDidMount() {

        Axios.get(`http://localhost:8080/customers`)
        .then(result => {
          if (result !== null) {
            this.setState({ renderData:result.data });
          }
        }).catch(error => {
        })

        Axios.get(`http://localhost:8080/transactions`)
        .then(result => {
          if (result !== null) {
            this.setState({ renderTransactionData:result.data });
          }
        }).catch(error => {
        })
      
    }

    render() {
        return (
            <div>
            <div className="panelBorder">
            <Panel header="Customer Records" toggleable={true} >
                <div className="card">
                    <DataTable value={this.state.renderData} responsiveLayout="scroll">
                        <Column style={{ width: '80px' }} field="id" header="CustomerId"></Column>
                        <Column style={{ width: '80px' }} field="name" header="Name"></Column>
                        <Column style={{ width: '80px' }} field="totalcustrewards" header="Total Rewards"></Column>
                    </DataTable>
                </div>
                </Panel>
                </div>
                
                <div className="panelBorder">
            <Panel header="Transaction Records" toggleable={true} >
                 <div className="card">
                    <DataTable value={this.state.renderTransactionData} responsiveLayout="scroll">
                        <Column style={{ width: '100px' }} field="id" header="TransactionId"></Column>
                        <Column style={{ width: '150px' }} field="customerId" header="CustomerId"></Column>
                        <Column style={{ width: '80px' }} field="total" header="Money Spent"></Column>
                        <Column style={{ width: '350px' }} field="insertDate" header="Purchased Date"></Column>
                        <Column style={{ width: '80px' }} field="rewardPoints" header="Reward Points"></Column>
                    </DataTable>
                </div>
                </Panel>
                </div>
                </div>
        );
    }
}
                 