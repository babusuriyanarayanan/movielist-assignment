import React from 'react';
import { TableList } from './components/datatable/TableList';
import { loadDatas } from './components/service/listservice';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            datatable: [],
            app_year: [
                { 'id': 'All', 'name': 'All' },
                { 'id': '2017', 'name': '2017' },
                { 'id': '2016', 'name': '2016' },
                { 'id': '2015', 'name': '2015' }
            ],
            currentStatus: 'All'




        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

    }

    componentDidMount() {

        loadDatas().then(data => this.setState({ datatable: data }))

    }

    handleInputChange(evt) {
        this.setState({
            currentStatus: evt.target.value
        })
    }

    handleRemove(id) {
        const updatedDataTable = this.removeData(this.state.datatable, id)
        this.setState({ datatable: updatedDataTable })

    }

    removeData(list, id) {

        const removeIndex = list.findIndex(item => item.id === id)
        return [
            ...list.slice(0, removeIndex),
            ...list.slice(removeIndex + 1)
        ]
    }

    filterStatus(list, status) {
        return list.filter(item => {
                if (status !== 'All') {
                    return item.Year === status
                } else {
                    return item
                }
            }


        )

    }

    addIdenticalColorCode(list) {

        list.map(item => {
            if (item.Year === '2015') {
                item.color = 'orange'
            } else if (item.Year === '2017') {
                item.color = 'green'

            } else if (item.Year === '2016') {
                item.color = 'red'
            }

        })

        return list;
    }

    render() {
        const colorCodeList = this.addIdenticalColorCode(this.state.datatable);
        const filteredList = this.filterStatus(this.state.datatable, this.state.currentStatus);

        return ( < div className = "app-container" >
            < div className = "row" >
            < div className = "col-md-12" >
            < h2 > Requests < /h2> < /div> < div className = "col-md-12 status-container" >

            < select name = "status"
            className = "status"
            onChange = { this.handleInputChange } > {
                this.state.app_year.map(option => ( < option key = { option.id }
                    value = { option.id } > { option.name } < /option>
                ))

            } < /select>	

            < /div>

            < /div> < div className = "data-table" >
            < h2 > React Data table < /h2> < TableList datatable = { filteredList }
            status = { this.state.currentStatus }
            handleRemove = { this.handleRemove }
            /> < /div>

            < /div>




        );

    }
}

export default App;


