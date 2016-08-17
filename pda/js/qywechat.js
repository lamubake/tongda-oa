/**
 * ΢����ҳ�˵���JS
 * �Զ������ʹ�ã�
 * WeixinJS.hideOptionMenu() �������Ͻǰ�ť
 * WeixinJS.showOptionMenu() ��ʾ���Ͻǰ�ť
 * WeixinJS.hideToolbar() ���ع�����
 * WeixinJS.showToolbar() ��ʾ������
 * WeixinJS.getNetworkType() ��ȡ����״̬
 * WeixinJS.closeWindow() �رմ���
 * WeixinJS.scanQRCode() ɨ���ά��
 * WeixinJS.openUrlByExtBrowser(url) ʹ�����������ַ
 * WeixinJS.jumpToBizProfile(username) ��ת��ָ�������˺�ҳ��
 * WeixinJS.sendEmail(title,content) �����ʼ�
 * WeixinJS.openProductView(latitude,longitude,name,address,scale,infoUrl) �鿴��ͼ
 * WeixinJS.addContact(username) ����΢���˺�
 * WeixinJS.imagePreview(urls,current) ����΢����ͼƬԤ��
 * �Զ�������������ݸ�ʽ��
 * var dataForWeixin={
       appId:"",
       MsgImg:"��ϢͼƬ·��",
       TLImg:"ʱ����ͼ·��",
       url:"����url·��",
       title:"����",
       desc:"����",
       fakeid:"",
       prepare:function(argv){
       if (typeof argv.shareTo!='undefined') 
        switch(argv.shareTo) {
            case 'friend':
            //���͸�����
            alert(argv.scene); //friend
            break;
            case 'timeline':
            //���͸�����
            break;
            case 'weibo':
            //���͵�΢��
            alert(argv.url);
            break;
            case 'favorite':
            //�ղ�
            alert(argv.scene);//favorite
            break;
            case 'connector':
            //������������Ӧ��
            alert(argv.scene);//connector
            break;
            default��
        }
       },
       callback:function(res){
        //���͸����ѻ�Ӧ��
        if (res.err_msg=='send_app_msg:confirm') {
            //todo:func1();
            alert(res.err_desc);
        }
        if (res.err_msg=='send_app_msg:cancel') {
            //todo:func2();
            alert(res.err_desc);
        }
        //����������Ȧ
        if (res.err_msg=='share_timeline:confirm') {
            //todo:func1();
            alert(res.err_desc);
        }
        if (res.err_msg=='share_timeline:cancel') {
            //todo:func1();
            alert(res.err_desc);
        }
        //������΢��
        if (res.err_msg=='share_weibo:confirm') {
            //todo:func1();
            alert(res.err_desc);
        }
        if (res.err_msg=='share_weibo:cancel') {
            //todo:func1();
            alert(res.err_desc);
        }
        //�ղػ������Ӧ��
        if (res.err_msg=='send_app_msg:ok') {
            //todo:func1();
            alert(res.err_desc);
        }       
       }
    };
 */

WeixinJS = typeof WeixinJS!='undefined' || {};
//�������Ͻǰ�ť
WeixinJS.hideOptionMenu = function() {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.call('hideOptionMenu');
    });
};
//��ʾ���Ͻǰ�ť
WeixinJS.showOptionMenu = function() {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.call('showOptionMenu');
    });
};
//���صײ�������
WeixinJS.hideToolbar = function() {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.call('hideToolbar');
    });
};
//��ʾ�ײ�������
WeixinJS.showToolbar = function() {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.call('showToolbar');
    });
};
//��ҳ��ȡ�û�����״̬
netType={"network_type:wifi":"wifi����","network_type:edge":"��wifi,����3G/2G","network_type:fail":"����Ͽ�����","network_type:wwan":"2g����3g"};
WeixinJS.getNetworkType = function(callback) {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke('getNetworkType',{},
        function(res){
            //result: network_type:wifi,network_type:edge,network_type:fail,network_type:wwan
            //netType[e.err_msg]
            callback(res.err_msg);
        });
    });
};
//�رմ���
WeixinJS.closeWindow = function() {
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("closeWindow", {});
};
//ɨ���ά��
WeixinJS.scanQRCode = function() {
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("scanQRCode", {});
};
//ʹ�����������ַ
WeixinJS.openUrlByExtBrowser=function(url){
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("openUrlByExtBrowser",{"url" : url});
};
//��ת��ָ�������˺�ҳ��
WeixinJS.jumpToBizProfile=function(username){
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("jumpToBizProfile",{"tousername" : username});
};
//�����ʼ�
WeixinJS.sendEmail=function(title,content){
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("sendEmail",{
        "title" : title,
        "content" : content
    });
};
//�鿴��ͼ
WeixinJS.openProductView=function(latitude,longitude,name,address,scale,infoUrl){
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("openProductView",{
        "latitude" : latitude, //γ��
        "longitude" : longitude, //����
        "name" : name, //����
        "address" : address, //��ַ
        "scale" : scale, //��ͼ���ż���
        "infoUrl" : infoUrl, //�鿴λ�ý���ײ��ĳ�����            
    });
};
//����΢���˺�
WeixinJS.addContact=function weixinAddContact(username){
    if (typeof WeixinJSBridge!='undefined') WeixinJSBridge.invoke("addContact", {
        "webtype": "1",
        "username": username
    }, function(e) {
        WeixinJSBridge.log(e.err_msg);
        //e.err_msg:add_contact:added �Ѿ�����
        //e.err_msg:add_contact:cancel ȡ������
        //e.err_msg:add_contact:ok ���ӳɹ�
        if(e.err_msg == 'add_contact:added' || e.err_msg == 'add_contact:ok'){
                //��ע�ɹ��������Ѿ���ע��
        }
    });
};

/**
 * ����΢����ͼƬԤ��scrollview
 * @param array urls ͼƬurl����
 * @param string current ��ǰͼƬurl
 */
WeixinJS.imagePreview = function(urls,current) {
    if (typeof WeixinJSBridge!='undefined') 
        WeixinJSBridge.invoke("imagePreview", {
            current: current,
            urls: urls
        });
};

/*
 * ������Ȩ��ַ
 * @param url ��ַ
 */
WeixinJS.addAuthCode = function(url){
    var state = WXS.WXState;
    var baseUrl = WXS.URI;
    return url.indexOf(baseUrl) != -1 ? (url + "&WXState=" + state) : (baseUrl + url + "&WXState=" + state);
}