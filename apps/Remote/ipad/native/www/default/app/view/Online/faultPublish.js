
/* JavaScript content from app/view/Online/faultPublish.js in folder common */
/*
 * File: app/view/Online/faultPublish.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.view.Online.faultPublish', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        id: 'service_Branch_FaultMonitor1',
        layout: 'vbox',
        cls: [
            'remote-content',
            'remote-service'
        ],
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-service-FaultMonitor',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'remote-title',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'remote-titleText',
                                docked: 'left',
                                html: '遥监故障发报'
                            },
                            {
                                xtype: 'button',
                                id: 'online_FaultPublish_BtnTrap',
                                itemId: 'online_FaultPublish_BtnTrap',
                                text: '困人'
                            },
                            {
                                xtype: 'button',
                                id: 'online_FaultPublish_BtnAll',
                                itemId: 'online_FaultPublish_BtnAll',
                                text: '所有'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'dataview',
                                flex: 1,
                                cls: 'remote-FaultMonito-listBox',
                                id: 'online_FaultPublish_List',
                                itemTpl: [
                                    '<div class="remote-FaultMonito-list">',
                                    '	<div class="remote-FaultMonito-listNumber">{belongCompany}</div>',
                                    '	<div class="remote-FaultMonito-listName">{buildingName}</div>',
                                    '    ',
                                    '<div class="remote-FaultMonito-listTrapped" style="font-size:0.8em">',
                                    '<tpl if="isTrap === \'1\'">    ',
                                    '    <span class="fa-stack fa-lg">',
                                    '      <i class="fa fa-square-o fa-stack-2x"></i>',
                                    '      <i class="fa fa-male fa-stack-1x"></i>',
                                    '    </span>',
                                    '<tpl else>',
                                    '</tpl>',
                                    '</div>',
                                    '    ',
                                    '    <div class="remote-FaultMonito-listLadder elevator-type{elevatorType}Y">',
                                    '        {elevatorNo}',
                                    '    </div>',
                                    '</div>'
                                ],
                                store: 'Online_FaultPublish'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});