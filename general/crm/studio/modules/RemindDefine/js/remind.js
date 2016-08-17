(function($){
    var remind = {
        router: {
            fetch: 'getRemind.php',
            submit: 'submit.php'
        },        
        init: function(){
            this.bindEvent();
            this.fetch(function(ret){
                remind.datas = ret.total ? ret.data : null;
                remind.render();
            });
        },
        bindEvent: function(){
            $(document)
                .delegate('#remind-list a.edit', 'click.remind', function(){
                    this.getAttribute('data-index') && remind.edit(this.getAttribute('data-index'));
                })
                .delegate('#extend-user', 'change.remind', function(){
                    var extend = $(this).prop('checked');
                    $('.remind-line-user-extend')[ extend ? 'show' : 'hide']();
                    if($('#extend-user').attr('checked')==null||$('#extend-user').attr('checked')=='')
                    {
                    	$('#auth_dept').val('');
                    	$('#dept_name').val('');
                    	$('#auth_user').val('');
                    	$('#user_name').val('');
                    	$('#auth_priv').val('');
                    	$('#priv_name').val('');
                    }
                })
                .delegate('#remind_interval', 'change.remind', function(){
                    var extend = $(this).val() == 'everyday';
                    $('#remind_exec_time')[ extend ? 'show' : 'hide']();
                })
                .delegate('#ahead_schedule', 'keyup.remind', function(e){
                    this.value = this.value.replace(/[^\d]/ig,'');                   
                });
        },
        render: function(){
            var $list;
            if(remind.datas){
               var t = remind.getTmpl('list'),
               $list = $(t).tmpl(remind.datas);
            }else{
               $list = remind.getTmpl('empty').tmpl();
            }
            
            $('#remind-list tbody').html($list);
            
        },
        edit: function(id){
            if(!remind.p){
                remind.p = $('#popPanel').popPanel({
                    width: 550,
                    height: 320,
                    closeCallback: function(){
                        this.setContent('');
                    } 
                }).data('popPanel');
            }
            var p = remind.p;
            p
            .setContent( this.getTmpl('editList').tmpl(this.datas[id]) )
            .open()
            .renderCtrlBar([
                {
                    text:'确定',
                    className:'btn-blue',
                    func:function(){
                        remind.submit();
                    }
                },
                {
                    text:'关闭',
                    className:'btn',
                    func:function(){
                        p.close();					
                    }
                }
            ]);
            $('#extend-user,#remind_interval').trigger('change.remind');
        },
        getTmpl: function(act){
            switch(act){
                case 'list':
                    return $('#listTemplate');
                    break;
                case 'empty':
                    return $('#emptyTemplate');
                    break;
                case 'editList':
                    return $('#editListTemplate');
                    break;
                default:
                    return '';
                    break;
            }
        },
        submit: function(){
            var $form = this.p.$element.find('form');
            if(!this.validate()){
                return;
            }
            $.post(remind.router.submit, $form.serialize(), function(ret){
                if(ret = '+ok'){
                    remind.p.message('更新成功！');
                    remind.update();
                    setTimeout(function(){
                        remind.p.close();
                    }, 1500);
                }else{
                    remind.p.message(ret);
                }
            });
        },
        validate: function(){
            var $form = this.p.$element.find('form');
            if($('#remind_name', $form).val() == ''){
                $('#remind_name', $form).focus();
                alert('请输入提醒名称。');
                return false;
            }
            
            return true;
        },
        update: function(){
            this.fetch(function(ret){
                remind.datas = ret.total ? ret.data : null;
                remind.render();
            });
        },
        fetch: function(callback){
            
//            var data = [
//                { index: 1, id: 0, name: 'name1', remind_fields: ['合同到期时间', '合同负责人'], judge_field: '合同到期时间', ahead_schedule: 2, rule_text: '温馨提示：客户活动主题为{#NAME}的下次联系时间{#TIME}快要到了。', interval: 'everyday', fielduser: '合同负责人', user: { value: '1,2,3', label: '1,2,3' }, dept: { value: '1,2,3', label: '1,2,3' }, priv: { value: '1,2,3', label: '1,2,3' }, time:  '12:00' , remind_desc: 'info1'},
//                { index: 2, id: 1, name: 'name2', remind_fields: ['合同到期时间', '合同负责人'], judge_field: '合同到期时间', ahead_schedule: 2, rule_text: '温馨提示：客户活动主题为{#NAME}的下次联系时间{#TIME}快要到了。', interval: 'everyhour', fielduser: '合同负责人', user: { value: '1,2,3', label: '1,2,3' }, dept: { value: '1,2,3', label: '1,2,3' }, priv: { value: '1,2,3', label: '1,2,3' }, time:  '12:00' , remind_desc: 'info2'},
//                { index: 3, id: 2, name: 'name3', remind_fields: ['合同到期时间', '合同负责人'], judge_field: '合同到期时间', ahead_schedule: 2, rule_text: '温馨提示：客户活动主题为{#NAME}的下次联系时间{#TIME}快要到了。', interval: 'everyhour', fielduser: '合同负责人', user: { value: '1,2,3', label: '1,2,3' }, dept: { value: '1,2,3', label: '1,2,3' }, priv: { value: '1,2,3', label: '1,2,3' }, time:  '12:00' , remind_desc: 'info3'}
//            ];
//                callback(data);
            
            $.get(remind.router.fetch, {EntityName: EntityName}, function(ret){
            	// console.log(ret.data);
                callback(ret);
            });            
        }
    };
    window.remind = remind;
    $(function(){
        remind.init();
    });
})(jQuery);