define('tDesktop/tDesktop.Search',function(require,exports,module) {

    var $ = window.jQuery;
    require('backbone');
    require('/static/js/bootstrap/paginator/bootstrap.paginator.min.js');


    //��������ģ��
    var searchModule = {
        $el: $('.search-container'), //ȡ���������ⲿ����
        paginators: {}, //��ҳ������
        templates: []//�������ģ������
    };


    //-------------- ��������ģ��ĳ�ʼ������ -----------------
    searchModule.init = function() {
        //console.log(this,"this is searchModule object.");
        this.initBind(); //��ʼ���������UI�����¼���
        this.initTemplates(); //��ʼ��ҳ��ģ��

        return 'search module has been initialized.';
    };

    //��ȡ������ҳ��ģ��
    searchModule.initTemplates = function() {
        this.templates["user"] = $('#search-template-user').template();
        this.templates["menu"] = $('#search-template-menu').template();
        this.templates["workflow"] = $('#search-template-workflow').template();
        this.templates["contacts"] = $('#search-template-contacts').template();
        this.templates["calendar"] = $('#search-template-calendar').template();
    };

    //���ò���ʾ�������ؽ������
    searchModule.setItemsNum = function(type,num) {
        var _counter = $('.search-counter-'+type);
        _counter.text("("+num+")");
        _counter.show();
    };


    //��ʼ��ҳ��(init Pagination)
    searchModule.initPagination = function(keyword,type,curPage,totalPages) {
        $('#pagination-'+type).bootstrapPaginator({
            currentPage: curPage,
            totalPages: totalPages,
            onPageChanged: function(e,oldPage,newPage){
                var self = this;//ȡ��ҳ�ŵ�����
                $(this).hide();//����ҳ�ţ�1s������ʾ
                setTimeout(function() {
                    $(self).show();
                },1000);
                $('.search-container').animate({scrollTop: 0},300,function() {
                    $('.search-results-'+type+'>li').remove(); //�����һҳ����
                    search(keyword,type,newPage); //���ͷ�ҳ����(send pagination search request)
                });

            }
        });
    };


    //�������UI���ֵ��¼��󶨺���
    searchModule.initBind = function() {
        var self = this;
        //���˹�ע
        $(".search-container").delegate(".user-body-follow", "click", function(){
            var $this = $(this),
                uid = $this.parents("li").attr("u_id"),
                userid = $this.parents("li").attr("userid");
            $.get("/general/person_info/concern_user/concern_function.php", {load:"concern",concern_content:"COMMUNITY,",group_id:0,user_id:userid}, function(d){
                if(d == "ok"){
                    $this.parents("li").addClass("unconcern");
                }
            });
        });
        //---------�������ض�λ�����Ͻǣ����Ŵ����������--------
        $('#search-input').one('keydown', function(e) {
            $('.search-box').css({
                'margin-top': '15px',
                'margin-left': '0px'
            });
            //$(this).css('width','600px');
        });

        //---------�ύ�������󵽺�̨�����͡��ؼ��֡��͡��������͡�����������Ĭ���ǡ�user����-------
        $('#search-btn').click(function(e) {
            //ȡ�ùؼ��ʺ��������ͣ����δ����ؼ�����ֱ�ӷ���
            var $value = $('#search-input').val();
            if(!$value || $value.lastIndexOf(' ') == ($value.length-1)) return false;
            var $searchType = $('#search-btn').attr('search-type');

            //�����������������µ�searched����Ϊ�գ���ǰ����ֵΪsearched
            $('.search-results-tabs li').attr('searched','');
            $('.' + $searchType + '-tab').attr('searched','searched');

            $('.search-results-container>ul>li').remove(); //�����ύ����������ϴ��������
            $('.search-counter').hide(); //�����ύ������ȡ����ʾtab����Ŀ��

            //�����ύ����������ϴ�����ҳ��
            if(!$.isEmptyObject(self.paginators)) {
                _.each(self.paginators,function(item) {
                    item.destroy();
                });
                self.paginators = {};
            }

            search($value,$searchType); //�ύ����(invoke search function)
            $('.search-results-wrapper').show(); //��ʾ����б�
        });

        //--------------Ϊtab�󶨵���¼�-------------
        $('.search-results-tabs li').click(function(){
            //ȡ�ùؼ��ʺ���������
            var $value = $('#search-input').val();
            var $searchType = $(this).attr('search-type');
            //�����ǰtabΪ����״̬�����̷���
            if($(this).hasClass('active')) {
                return false;
            }

            //��ʾ��Ӧ��������������б�ul)
            var $tabName = $(this)[0].className.split('-')[0];
            //��ȡ��ǰ��Ӧ��tab���ͣ�����ǵ�������߰������������tab�л�������ǵ�������߰������������ҳ
            if($tabName != 'helper') {
                //����ƴ��ul������������tab����
                var $resultsTabclassName = '.search-results-' + $tabName;
                $('.search-results-container>ul').hide();
                $($resultsTabclassName).show();
            } else {
                return;
            }

            //�л�tab�˵�
            $('.search-results-tabs li').removeClass('active');
            $(this).addClass('active');

            //Ϊ���ؽ������ul��Ӷ���
            $('.search-results-container ul').removeClass('animated fadeInLeft');
            $('.search-results-'+$tabName).addClass('animated fadeInLeft');

            //���á��������µ���������
            $('#search-btn').attr('search-type',$(this).attr('search-type'));

            //�����ǰtab��������(searched)����Ϊ�գ����ύ����
            if($(this).attr('searched') == '' && $value != '') {
                search($value,$searchType);
                $(this).attr('searched','searched');//���ĵ�ǰtab��searched����Ϊ������(searched)
            }
        });


        //---------------- �Զ��ύ��������(����setTimeOut�������������� ----------------
        var searchTimer;//���������ʱ��
        $('#search-input').keyup(function(e) {

            searchTimer && clearTimeout(searchTimer);
            searchTimer = setTimeout(function() {
                $('#search-btn').trigger('click');
            },500);



        });

        //����workflow��鷵�ص�url��ַ������ֵ��<a>��href����
        $('.search-results-workflow').bind('ajaxDataReady',function() {
            $.each($('.search-results-workflow>li'),function(index,item) {
                var url = $(item).attr('url');
                var newUrl = url.slice(8);//ȥ��general/
                $(item).find('a').attr({
                    'href': newUrl,
                    'target': '_blank'
                });
            })
        });

        //�ر�����ģ̬��
        this.$el.find('.search-close-btn').click(function() {
            $('body').removeClass('showSearch');
            $('#searchbar').removeClass('on');
        })

    };

    //���嵯������ҳ����
    searchModule.open = function() {

    };

    //����ر�����ҳ����
    searchModule.close = function() {

    };

    //--------------------------------------------------ģ���ڲ���������------------------------------------------------
    function search(keyword,searchType,curPage,pageLimit) {
        var self = searchModule; //�����������������

        //�������������"�˵�(menu)"����������������ύ����
        if(searchType == 'menu') {
            var count = 0, //��������������
                menus = [];//����һ����ŷ��ز˵�������

            for (var menuId in func_array) {
                var func = func_array[menuId],
                    func_id = menuId.substr(1);
                //���һ���˵����������˵��Ķ����˵���û��Ȩ�޵Ĳ˵�������
                if (menuId.substr(0, 1) != 'f' || func[1].substr(0, 1) == '@'/* || (my_func_id_str.indexOf(func_id + ',') < 0 && my_func_id_str.indexOf(',' + func_id + ',') < 0)*/) {
                    continue;
                }
                //ƥ�� �˵����ơ�����ƴ������ĸ�е��κ�һ��
                var title = func[0] || "",
                    abbr = func[3] || "";
                if (title.toLowerCase().indexOf(keyword) >= 0 || abbr.toLowerCase().indexOf(keyword) >= 0) {
                    count++;
                    var singleMenu = {};
                    singleMenu.menuId = func_id;
                    singleMenu.menuTitle = title;
                    singleMenu.menuUrl = func[1];
                    menus.push(singleMenu);
                }
            }

            //��ҳ������Ⱦ���صĲ˵�
            searchRender(searchType,count,menus);

            return;
        }

        //������������(user,workflow,contacts,calendar)������������ύajax����
        //���嵱ǰѡ��ҳ��ÿҳ��ʾ������Ĭ��Ϊ1��10(define the chosen page and the number of items per page, default is 1 and 10.)
        var _curPage = curPage || 1,
            _pageLimit = pageLimit || 10;
        $.ajax({
            type: "GET",
            url: "/general/person_info/search/get_search.func.php",
            data: {
                curPage: _curPage,
                pageLimit: _pageLimit,
                type: searchType,
                keyword: keyword
            },
            dataType: "json",
            success: function(data) {
                //���ݷ�������(data.curPage,data.totalpage)��ʼ����ҳ���(init pagination based on the return data.)
                if(!self.paginators[searchType]) {
                    if(data.curPage>0 && data.totalpage>1) {
                        searchModule.initPagination(keyword,searchType,data.curPage,data.totalpage);
                        self.paginators[searchType] = $('#pagination-'+searchType).data('bootstrapPaginator'); //���浱ǰ��ҳ��
                        //console.log(self.paginators,"this is the array of paginators.");
                    }
                }
                self.$el.animate({height:'85%'},300);//չ��������
                searchRender(searchType,data.numCount,data.datalist); //���ݷ�������(tata.datalist)����Ⱦģ��

                if(searchType == 'workflow')
                    $('.search-results-workflow').trigger('ajaxDataReady');//�㲥ajax�������ݿɹ�����
            },
            error: function(error) {
                console.error('some error happened:' + error.statusText);
            }
        })
    }

    //��Ⱦ��������
    function searchRender(type,num,data) {
        var self = searchModule; //�����������������
        self.setItemsNum(type,num);//��ʾ�����ķ��ؽ����

        $.each(data,function(index,item) {
//            console.log(item);
            var element = $.tmpl(self.templates[type],item);
            element.insertBefore('#pagination-'+type);
        });
    }

    //�Զ���Ȥζlog����
    function funLog() {
        console.log("%c  ","font-size:350px; background: url(http://img3.douban.com/lpic/s10299848.jpg) no-repeat");
    }

    //�ṩģ����ⲿ�ӿ�
    module.exports = searchModule;

});