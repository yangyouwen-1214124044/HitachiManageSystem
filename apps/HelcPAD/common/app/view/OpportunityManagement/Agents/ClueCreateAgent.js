/*
 * File: app/view/Agents/ClueCreateAgent.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPAD.view.OpportunityManagement.Agents.ClueCreateAgent', {
    extend: 'Ext.form.Panel',
    id:'clueCreateAgent',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Toggle',
        'Ext.field.Select'
    ],

    config: {
        items: [

            {
            	id:'clueCreateAgentToolbar',
                xtype: 'toolbar',
                docked: 'top',
                title: '新建报备',
                cls:'textf',
                items: [
                    {
                    	id:'clueCreateBack',
                        xtype: 'button',
                        text:'返回',
                        ui: 'back',
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                    	id:'execOperation',
                        xtype: 'button',
                        text: '提交',
                    },
                    {
                    	id:'execOperation_ZG',
                        xtype: 'button',
                        text: '修改',
                        hidden:true,
                    },
                    {
                    	id:'clueSelf',
                    	xtype:'hiddenfield',
                    },{
                    	id:'clueMapX',
                    	name:'XHeight',
                    	xtype:'hiddenfield',
                    },{
                    	id:'clueMapY',
                    	name:'YCoordinate',
                    	xtype:'hiddenfield'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                cls:'textf',
                items: [
                    {
                    	id:'clueNumber',
                    	name:'Id',
                        xtype: 'textfield',
                        label: '线索编号',
                        readOnly: true,
                        width:'100%',
                        labelWidth:160,
                        placeHolder:'自动生成',
                        hidden:true
                    },
                    {
                    	id:'clueSource',
                    	name:'LeadSource',
                        xtype: 'textfield',
                        label: '线索来源',
                        readOnly: true,
                        width:'100%',
                        labelWidth:160,
                        hidden:true
                    },
                    {
                    	id:'submitTime',
                    	name:'SubmitDate',
                        xtype: 'textfield',
                        label: '提交时间',
                        width:'100%',
                        labelWidth:160,
                        placeHolder:'提交后自动生成',
                        readOnly:true,
                        hidden:true
                    },
                    {
                    	id:'supplierName',
                    	name:'AgentName',
                        xtype: 'selectfield',
                        label: '代理商名称',
                        width:'100%',
                        labelWidth:160,
                        //value:'广州飞跃电梯销售有限公司',
                        placeHolder:'当前用户所在单位'
                    },{
                    	id:'agentId',
                    	xtype:'hiddenfield',
                    	name:'AgentId',
                    },
                    {
                    	id:'reportPerson',
                    	name:'RegistrationPerson',
                        xtype: 'textfield',
                        label: '报备人',
                        readOnly: true,
                        width:'100%',
                        labelWidth:160,
                        value:usernames,
                        plachHolder:'当前用户'
                    },
                    {
                    	id:'projectName',
                    	name:'ProjectName',
                        xtype: 'textfield',
                        label: '项目名称',
                        width:'100%',
                        labelWidth:160,
                        placeHolder:'请输入项目名称',
                        //value:'蓝宝石大楼电梯工程'
                    },
                    {
                    	id:'clueCustomer',
                    	name:'Account',
                        xtype: 'textfield',
                        label: '客户名称',
                        //labelWidth:'54%',
                        labelWidth:160,
                    	width:'82%',
                    	style:'float:left;',
                    	placeHolder:'请选择客户',
                    },{
                    	id:'toClueCustomer',
                    	xtype:'button',
                    	margin:'9 0 0 0',
                    	text:'选择',
                    	width:'18%',
                    	style:'float:left;'
                    },{
                    	id:'clueCustomerId',
                    	name:'AccountId',
                    	xtype:'hiddenfield'
                    },
                    {
                    	id:'clueFinalUser',
                    	name:'LeadFinalUser',
                        xtype: 'textfield',
                        label: '使用单位',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'与客户项关联',
                    },
                    {
                    	id:'clueArea',
                    	name:'ProjectArea',
                        xtype: 'textfield',
                        label: '区域',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'根据省份自动生成',
                        /*options:[
                                {text:'请选择',value:''},
                                {text:'华南',value:'华南'},
                                {text:'华中',value:'华中'},
                                {text:'华北',value:'华北'},
                                {text:'华东',value:'华东'},
                                {text:'西南',value:'西南'},
                                {text:'西北',value:'西北'},
                                {text:'东北',value:'东北'},
                        ]*/
                    },
                    {
                    	id:'clueProvince',
                    	name:'Province',
                        xtype: 'textfield',
                        label: '省/直辖市',
                        width:'82%',
                        //labelWidth:'54%',
                        labelWidth:160,
                        style:'float:left;',
                        /*options:[
                                {text:'广东省',value:'广东省'}
                        ]*/
                        placeHolder:'请选择省',
                    },{
                    	id:'toStreetAddress',
                    	xtype:'button',
                    	width:'18%',
                    	style:'float:left;',
                    	margin:'9 0 0 0',
                    	text:'选择',
                    },
                    {
                    	id:'clueCity',
                    	name:'City',
                        xtype: 'textfield',
                        label: '市',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        /*options:[
                                     {text:'请选择',value:''},
                                     {text:'佛山市',value:'佛山市'}
                         ]	*/
                        placeHolder:'请选择市',
                    },
                    {
                    	id:'clueDistrict',
                    	name:'County',
                        xtype: 'textfield',
                        label: '区/县',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        /*options:[
                                 {text:'请选择',value:''},
                                 {text:'禅城区',value:'禅城区'}
                        ]*/
                        placeHolder:'请选择区',
                    },
                    {
                    	id:'projectAddress',
                    	name:'StreetAddress',
                        xtype: 'textfield',
                        label: '项目地址',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        //value:'世纪广场蓝宝石大楼301',
                        placeHolder:'请输入项目地址'
                        
                    },
                    {
                    	id:'cluePosition',
                    	name:'cluePosition',
                        xtype: 'textfield',
                        label: '定位坐标',
                        width:'82%',
                        //labelWidth:'54%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请选择报备坐标',
                    },{
                    	id:'toCluePosition',
                    	xtype:'button',
                    	text:'定位',
                    	style:'float:left;',
                    	width:'18%',
                    	margin: '10 0 0 0',
                    },{//*
                    	id:'opptyCategory',
                    	name:'LeadCategory',
                    	xtype:'selectfield',
                    	label:'线索类型',
                    	width:'100%',
                    	labelWidth:160,
                    	style:'float:left;',
                    	
                    },{//*
                    	id:'opptySubCategory',
                    	name:'LeadSubCategory',
                    	xtype:'selectfield',
                    	label:'线索子类型',
                    	width:'100%',
                    	labelWidth:160,
                    	style:'float:left;'
                    },
                    {
                    	id:'builderHeight',
                    	name:'BuildingHeight',
                        xtype: 'numberfield',
                        label: '建筑高度',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请输入建筑高度',
                        //value:25
                    },
                    {
                    	id:'builderFloor',
                    	name:'BuildingLayer',
                        xtype: 'numberfield',
                        label: '建筑层数',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请输入建筑层数',
                        //value:15
                    },
                    {
                    	id:'planVelevatorNum',
                    	name:'EvaluateElevatorQuantity',
                        xtype: 'numberfield',
                        label: '预估直梯台数',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请输入预估直梯台数',
                        //value:8
                    },
                    {
                    	id:'planHelevatorNum',
                    	name:'EvaluateEscalatorQuantity',
                        xtype: 'numberfield',
                        label: '预估扶梯台数',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请输入预估扶梯台数',
                        //value:3
                    },{
                    	id:'cluePredictSignYear',
                    	name:'PredictSignYear',
                    	xtype:'selectfield',
                    	label:'预计签约年',
                    	width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        listeners:{
                        	initialize:function(selectField, eOpts ){
                        		var years = [];
                        		years[0] = {text:'请选择',value:''};
                        		for(var i=1;i<50;i++){
                        			var year = {text:2010+i+'年',value:2010+i};
                        			years[i] = year;
                        		}
                        		selectField.setOptions(years);
                        	}
                        },
                        placeHolder:'请选择预计签约年份',
                    },{
                    	id:'cluePredictSignMonth',
                    	name:'PredictSignMonth',
                    	xtype:'selectfield',
                    	label:'预计签约月',
                    	width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请选择预计签约月份',
                        listeners:{
                        	initialize:function(selectField, eOpts ){
                        		var months = [];
                        		months[0] = {text:'请选择',value:''};
                        		for(var i=1;i<13;i++){
                        			var month = {text:i+'月',value:i};
                        			months[i] = month;
                        		}
                        		selectField.setOptions(months);
                        	}
                        }
                    },
                    {
                    	id:'clueAccountKAName',
                    	name:'BigCustomer',
                        xtype: 'selectfield',
                        style: 'float: left',
                        label: '大客户名称',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        
                    },
                    {
                    	id:'clueAccountKANumber',
                    	name:'AccountKaNumber',
                        xtype: 'textfield',
                        style: 'float: left',
                        label: '大客户编号',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        readOnly: true,
                        placeHolder:'选择客户后自动生成',
                        //value:'54326'
                    },
                    {
                    	id:'clueBigProject',
                    	name:'LeadMajorProjet',
                        xtype: 'togglefield',
                        label: '大项目关注',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        //value:1
                    },
                    {
                    	id:'clueImportDemand',
                    	name:'LeadImportDemand',
                        xtype: 'togglefield',
                        label: '进口大部件需求',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        //value:1
                    },
                    {
                    	id:'clueCustomerDemand',
                    	name:'Description',
                        xtype: 'textfield',
                        label: '客户需求',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请输入客户需求',
                        //value:'客户对电梯的安全维护要求严谨'
                    },
                    {//*
                    	id:'directorOppose',
                    	name:'ManagerRejectComments',
                        xtype: 'textfield',
                        label: '主管驳回意见',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        //value:''
                    },
                    {
                    	id:'clueDealWithTime',
                    	name:'HandleDate',
                        xtype: 'textfield',
                        label: '线索处理时间',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        readOnly:true,
                        hidden:true
                    },
                    {//*
                    	id:'correlationOppty',
                    	name:'OpptyNumber',
                        xtype: 'textfield',
                        label: '关联商机',
                        width:'80%',
                        //labelWidth:'54%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请关联商机',
                    },
                    {//*
                    	id:'toCorrelationOppty',
                        xtype: 'button',
                        margin: '10 0 0 0',
                        width: '20%',
                        text: '详情',
                        style:'float:left;'
                    },
                    {//*
                    	id:'correlationOpptyStatus',
                    	name:'OpptyStatus',
                        xtype: 'textfield',
                        label: '商机状态',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'关联商机后自动生成',
                    },
                    {
                    	id:'clueStatus',
                    	name:'LeadStatus',
                        xtype: 'selectfield',
                        label: '线索状态',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        options:[
                                 {text:'请选择',value:''},
                                 {
                                 	text:'新建',
                                 	value:'新建',
                                 },
                                 {
                                 	text:'审批中',
                                 	value:'审批中',
                                 },
                                 {
                                 	text:'已取消',
                                 	value:'已取消',
                                 },
                                 {
                                 	text:'报备成功',
                                 	value:'报备成功',
                                 },
                                 {
                                 	text:'已终止',
                                 	value:'已终止',
                                 },
                                 {
                                 	text:'报备失败',
                                 	value:'报备失败',
                                 },
                        ]
                    },
                    {//*
                    	id:'clueFollower',
                    	name:'ListOfHELLead_AgentPosition',
                        xtype: 'textfield',
                        label: '线索跟踪人员',
                        width:'80%',
                        //labelWidth:'54%',
                        labelWidth:160,
                        style:'float:left;',
                        
                        
                    },{//*
                    	id:'toClueFollwoer',
                    	xtype:'button',
                    	text:'详情',
                    	width:'20%',
                    	margin:'9 0 0 0',
                    	style:'float:left;'
                    },
                    /*{
                    	id:'clueOrder',
                    	name:'RegistrationSequence',
                        xtype: 'textfield',
                        label: '报备顺序',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        readOnly:true,
                        placeHolder:'系统分配，无需填写',
                    },*/
                    {
                    	id:'supplierStatus',
                    	name:'AgentPerformanceStatus',
                        xtype: 'selectfield',
                        label: '代理商状态',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        readOnly:true,
                        placeHolder:'关联商机后生成',
                    },
                    {
                    	id:'taskAchieve',
                    	name:'PerformanceShared',
                        xtype: 'textfield',
                        label: '任务业绩',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请填写任务业绩',
                        hidden:true
                        //value:0.5
                    },
                    {
                    	id:'achieveNum',
                    	name:'PerformanceCountCal',
                        xtype: 'textfield',
                        label: '业绩台量',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        placeHolder:'请填写业绩台量',
                        hidden:true
                       // value:10
                    },
                    {
                    	id:'clueOperation',
                        xtype: 'selectfield',
                        label: '操作',
                        width:'100%',
                        labelWidth:160,
                        style:'float:left;',
                        options: [
                            {text:'保存报备',value:'保存报备'},
                            {text:'取消报备',value:'取消报备'},
                        ]
                    }
                ]
            }
        ]


    }

});