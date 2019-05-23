/*
 * File: app/view/BatchApplyDetail.js
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

Ext.define('HelcPAD.view.appworkspace.BatchApply.BatchApplyDetail', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
    	id:'batchApplyDetail_id',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '分批单详细信息',
                cls:'textfTwo',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回',
                        id:'batchApplyDetail_id_FH'
                    },
                    {
                        xtype: 'spacer'
                    },
                    /*{
                        xtype: 'button',
                        text: '保存'
                    }*/
                ]
            },
            {
                xtype: 'fieldset',
                //title: '',
                cls:'textfTwo',
                items: [
					{
						id:'SUBMIT_NUM',
					    xtype: 'textfield',
					    label: '申请次第',
					    labelWidth:'45%',
					    readOnly:true,
					},
                    {
						id:'LOT_NUM',
                        xtype: 'textfield',
                        label: '批次',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'REASON',
                        xtype: 'textfield',
                        label: '分批原因',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'NEED_DELIVER_DATE',
                        xtype: 'textfield',
                        label: '提前产出日期',//旧：要求提前产出日期
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'SPLIT_BOXHEADER',
                        xtype: 'textfield',
                        label: '分批箱头',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'SPLIT_PART',
                        xtype: 'textfield',
                        label: '分批部件',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'DELIVERY_DATE',
                        xtype: 'textfield',
                        label: '合同交货期',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'DELIVERY_DESC',
                        xtype: 'textfield',
                        label: '交货期说明',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'BUSINESS_COMMENTS',
                        xtype: 'textfield',
                        label: '营业说明',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'ENABLE_FLAG',
                        xtype: 'textfield',
                        label: '有效',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'STATUS_MEAN',
                        xtype: 'textfield',
                        label: '审批状态',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'REJECT_MEAN',
                        xtype: 'textfield',
                        label: '失效原因',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'DESIGNTYPE',
                        xtype: 'textfield',
                        label: '分批/整批设计',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    {
                    	id:'PRODUCETYPE',
                        xtype: 'textfield',
                        label: '分批/整批生产',
                        labelWidth:'45%',
                        readOnly:true,
                    },
                    
                    
                ]
            }
        ]
    }

});