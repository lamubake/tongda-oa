// "/inc/js_lang.php","/static/js/module.js","/static/js/utility.js","/static/js/attach.js"
/* "/inc/js_lang.php" */
if(typeof(sprintf)!="function")
{function sprintf(str)
{var array=str.split("%s");if(array.length==1||array.length!=arguments.length)
return str;str=array[0];for(var i=1;i<array.length;i++)
{str+=arguments[i]+array[i];}
return str;}}
var td_lang={};td_lang.global={page_up:"��һҳ",page_down:"��һҳ",songti:"����",delete_1:"ɾ��",select:"ѡ��",total:"�ϼ�",yes:"��",no:"��",reply:"�ظ�",error:"����",close:"�ر�",regist:"ע��",first_page:"��ҳ",before_page:"��ҳ",next_page:"��ҳ",last_page:"ĩҳ",refresh_1:"ˢ��",right:"��ȷ",print:"��ӡ",print_preview:"��ӡԤ��",clear:"���",details:"����",loading:"������..."};td_lang.module={msg_1:"AIP��������æ�����Ժ�����",msg_2:"��������Ч���������Ƿ�������",msg_3:"����δ֪�����Ӵ���",msg_4:"��Ч���������ϵͳ��֧�ֱ�����",msg_5:"ϵͳ��֧�ֱ�����",msg_6:"��������ݰ���ʽ���������ݴ��䲻��ȷ",msg_7:"�����������ʱ�䲻�������ܾ���¼���뱣֤����ʱ��ͷ�����ʱ�������ʮ�����֮��",msg_8:"ָ��֤���Ѿ������ϣ��޷�ʹ��",msg_9:"ָ��֤���Ѿ����ڣ��޷�ʹ��",msg_10:"���������ݿ���δ���ֱ��û���Ӧ��֤��",msg_11:"����ļ��������Ӳ��ѡ��ӡ��!",msg_12:"�����׺�ģ������������ѯ����֧����Ա��",msg_13:"��Word�ĵ�",msg_14:"��Excel������",msg_15:"��PowserPoint�õ�Ƭ",msg_16:"�༭�ĵ�",msg_17:"�Ķ��ĵ�",msg_18:"δ֪����",msg_19:"����ʹ��΢��Office������ĵ���",msg_20:"�Ƿ���ʹ�ý�ɽWPS���ִ���������ĵ���",msg_21:"�������󣺿ؼ��ĵڶ�������û��ָ����",msg_22:"û�д򿪵��ĵ���",msg_23:"WPS���",msg_24:"�ĵ������Ķ�״̬�������ܱ��浽��������",msg_25:"���ܱ��浽URL��",msg_26:"δ֪Ӧ�ó���",msg_27:"���ΪPDF��ʽ",msg_28:"�����ʼ�",msg_29:"OnDocumentOpened�¼���Script��������",msg_30:"�û�:",msg_31:"�ù�����Ҫ���PDFCreator֧��",msg_32:"�����ذ�װ��",msg_33:"���Ϊ PDF ��ʽ",msg_34:"���ܱ���PDF��URL��",msg_35:"�ϴ��ļ�������������",msg_36:"Ȩ�޴��󣬱��û���Ȩʹ��ָ����ӡ��",msg_37:"ָ��ӡ���Ѿ������ϣ��޷�ʹ��",msg_38:"ָ��ӡ���Ѿ����ڣ��޷�ʹ��",msg_39:"ָ��ӡ�²�����",msg_40:"Ȩ�޴�������Ȩ�������ĵ�",msg_41:"�ĵ��Ѿ�������������Ȩ����",msg_42:"ָ���ĵ�������",msg_43:"Ȩ�޴�������Ȩ��ӡ���ĵ�",msg_44:"�ĵ���ӡ���������꣬����Ȩ��ӡ���ĵ�",msg_45:"�򿪷��������ݿ�ʧ��",msg_46:"���·��������ݿ�ʧ��",msg_47:"�����ϴ�0�ֽ��ļ�",msg_48:"��Ч���ļ�����",msg_49:"δ֪����",msg_50:"�ϴ�ʧ�ܣ�",msg_51:"HTTP����",msg_52:"�ϴ�ʧ�ܣ�",msg_53:"������(IO)����",msg_54:"��ȫ����",msg_55:"�ﵽ�ϴ����ƣ�",msg_56:"�޷���֤�������ϴ���",msg_57:"��ȡ��",msg_58:"��ֹͣ",msg_59:"��ȡ���������ݿ�ʧ��",msg_60:"�������������ݿ�ʧ��",msg_61:"���û���û�е�¼���������޷����б�����",msg_62:"�û���¼�������",msg_63:"���û��ѱ�����������",msg_64:"ָ���û�������",msg_65:"�û����벻���ϸ�ʽ������ϵ����Ա",msg_66:"δ���ֵ�ǰ�û���֤����Ϣ",msg_67:"������δע�ᣬ����ϵ����Ա",msg_68:"���������û���������Ȩ����������ϵ����Ա",msg_69:"���û������ڱ��������������ϵ����Ա",msg_70:"���������֧�ִ��ֵ�¼��ʽ",msg_71:"�������˴���ʱ",msg_72:"�������˷���δ֪��������ϵ����Ա",msg_73:"���������ַ��Ч���뱣֤��������IP:Port(ֱ��)����HTTP URL(��http://www.xx.com:8080/aipserver.jsp)",msg_74:"���ӳ�ʱ",msg_75:"�û�ȡ��",msg_76:"�����û�IDӦ����'HWSEALDEMO'��ʼ",msg_77:"δ�����û��б�",msg_78:"�����û���¼",msg_79:"���ִ��󣬲�������ֹ",msg_80:"��Ч�Ķ���",msg_81:"��Ч���ݴ���",msg_82:"��Ч�Ĵ���",msg_83:"��Ч������",msg_84:"���У�����",msg_85:"�ڴ��޷�����",msg_86:"�������Ȩ",msg_87:"���������",msg_88:"δ֪����",msg_89:"û�в������ܿ�",msg_90:"��������ܿ���¼PIN��",msg_91:"ϵͳδ������Ч��˽Կ",msg_92:"ϵͳδ������Ч��֤��",msg_93:"����������CSP����",msg_94:"�������ڶ�����ܿ�",msg_95:"CSP����δ��װ,��ȷ���Ѿ���װ����ȷ�����ܿ�����",msg_96:"�������ܿ������г���δ֪����",msg_97:"�����֤δͨ��",msg_98:"���ܿ��в�����ӡ��"};td_lang.inc={dragupload:"��ק�ϴ�",drophere:"���ļ���ק�˴��ϴ�",personfav:"�����ղ�",multi_img_upload:"��������ͼƬ",msg_1:"�������ϴ��޺�׺�����ļ�",msg_2:"ͼƬֻ��Ϊgif,jpg,png,bmp��ʽ",msg_3:"������Ч",msg_4:"���ļ��Ѿ����",msg_5:"��Ӹ���",msg_6:"���ļ��������Ӳ��ѡ�񸽼�",msg_7:"����ͼƬ",msg_8:"�鿴�ճ�",msg_9:"�鿴����",msg_10:"�鿴����",msg_11:"�½��ճ�",msg_12:"�޸��ճ�",msg_13:"ɾ���󽫲��ɻָ���ȷ��Ҫɾ����",msg_14:"ɾ���󽫲��ɻָ���������������ŵ��ճ̽�������ɾ����ȷ��ɾ����",msg_15:"ɾ���󽫲��ɻָ���������������ŵ����񽫻�����ɾ����ȷ��ɾ����",msg_16:"ɾ���󽫲��ɻָ���������������ŵ����񽫻�����ɾ����ȷ��ɾ����",msg_17:"ɾ���󽫲��ɻָ���ȷ��ɾ����",msg_18:"���",msg_19:"δ���",msg_20:"�������ݲ���Ϊ�գ�",msg_21:"ҳ��trδ������edit_url",msg_22:"��ѡ�����û�",msg_23:"����������ʷ��¼",msg_24:"����ʧ��",msg_25:"������",msg_26:"����ʱ��",msg_27:"�ޱ���",msg_28:"ѡ�����",msg_29:"��ѡ�����",msg_30:"���ڼ��أ����Ժ򡭡�",msg_31:"��ȡ��������",msg_32:"ˢ��",msg_33:"���ĳ���",msg_34:"��ȡ������������ʧ��",msg_35:"�鿴��������",msg_36:"����ȫ������",msg_37:"�����µĶ���Ϣ��",msg_38:"��ȡ����Ϣ����ʧ��",msg_39:"����",msg_40:"����������",msg_41:"��Ա��ѯ",msg_42:"�������Ӵ���",msg_43:"�����У����Ժ� ...",msg_44:"��ʾ/������",msg_45:"������",msg_46:"�˲����ᵼ�±Ƚϻ���,ȷ��Ҫִ����?",msg_47:"��������Ч����!",msg_48:"����󰴻س�ȷ��",msg_49:"ҳ��",msg_50:"��ȡ�����У����Ժ�...",msg_51:"����ʧ�ܻ�ʱ�����Ժ����ԣ�",msg_52:"����:",msg_53:"���:",msg_54:"���޸�������",msg_55:"�����ʲô�ٷ����:)",msg_56:"�����������뻰��",msg_57:"����ɹ���",msg_58:"��ȡ���ݴ���",msg_59:"�ٶ�����",msg_60:"������",msg_61:"58ͬ��",msg_62:"����",msg_63:"������",msg_64:"�й�������",msg_65:"��������",msg_66:"�Ա���",msg_67:"�ſ���",msg_68:"�ٶ�����",msg_69:"��������",msg_70:"��������",msg_71:"�ٶ�mp3",msg_72:"Ϻ������",msg_73:"��ȡ���ݴ���",msg_74:"������Ӧ��",msg_75:"Ӧ�ú���",msg_76:"�����Ļ",msg_77:"����˳�������óɹ���",msg_78:"��Ļ��ӳɹ���",msg_79:"�Ƴ�����",msg_80:"ɾ�����棬��ɾ������ȫ��Ӧ��ģ�飬ȷ��Ҫɾ����",msg_81:"����ɾ���ɹ���",msg_82:"Ӧ������ӵ���ǰ���棡",msg_83:"Ӧ����Ӵ���",msg_84:"������...",msg_85:"����ʧ��",msg_86:"�����",msg_87:"�ֻ������",msg_88:"OA����",msg_89:"iPhone",msg_90:"Android",msg_91:"ȷ�ϲ���ʾ��ģ��ô?",msg_92:"��������ֵ",msg_93:"��ʾ���������ӳ�ʱ����������",msg_94:"��ʾ����������1-1000֮��",msg_95:"��ģ���Ѵ���",msg_96:"������ʱ",msg_97:"ѡ�����",msg_98:"��ѡ�����",msg_99:"��ȡ������Ϣ����",msg_103:"�������ݴ��󣬴��룺",msg_104:"����ʧ�ܣ�",msg_105:"ҳ����ش���",msg_106:"�������ϴ���׺��Ϊ%s���ļ�",msg_107:"����",msg_108:"΢Ѷ����ʧ�ܣ�%s",msg_109:"���ã�%s��",msg_110:"%sȷ��Ҫע����",msg_111:"%sȷ��Ҫ�˳���",msg_112:"����ʧ��%s",msg_113:"������%s����Զ��ر�",msg_114:"�ļ�%s�����",msg_115:"��ֹ�ϴ�%s�����ļ�",msg_116:"��ѡ����%s���ļ�",msg_117:"�ļ���С(%s MB)��������(%s)",msg_118:"%s���ļ��ϴ��ɹ���%s���ļ��ϴ�ʧ�ܣ�%s���ļ�ȡ����",msg_119:"Word ģ���в���������Ϊ��'%s'����ǩ��",msg_120:"ÿҳ%s��",msg_121:"��%sҳ/��%sҳ",msg_122:"������%s����¼����ʾ��%s��-��%s����¼",msg_123:"��%s����¼����ʾ��%s��-��%s����¼",msg_124:"��ǰ����Ӧ�ý�����%s����������ӽ����ܻ���������Ӧ���޷���ʾ��ʹ�ã�ȷ��Ҫ������",msg_125:"���ݳ���С��%s",msg_126:"ȷ��Ҫ%s�˹�����",msg_127:"����ͳ�ƣ�һ���ڷ���%sƪ��һ���ڷ���%sƪ���ܹ�����%sƪ",msg_weixunshare_107:"�Ѿ�@������",msg_weixunshare_108:"��ȡ����ԭ΢Ѷ��Ϣ��",msg_weixunshare_109:"΢Ѷת���ɹ���",msg_weixunshare_110:"ȷ��Ҫɾ������΢Ѷ��",msg_128:"����",msg_129:"ȫ��",msg_130:"��Ȩ�޲���",msg_131:"%s ����",msg_132:"�����µ��������ѣ�",msg_133:"�����µĶ���Ϣ���������ѣ�",msg_134:"���ʼ�",msg_135:"��΢Ѷ",msg_136:"���������ϵ��",msg_137:"�ѷ�",msg_138:"����",msg_139:"Ⱥ��",msg_140:"������",msg_141:"�鿴����",msg_142:"��ģ����ӳɹ�",msg_143:"�½�����ʱ��",msg_144:"�༭����ʱ��",msg_145:"�Ƴ�����",msg_146:"�鿴����",msg_147:"����д�Ƴ�ʱ��",msg_148:"��д���Ƴ�ʱ��Ӧ��Ϊ����",msg_149:"�Ƴ�ʱ�䲻��С�ڵ�ǰʱ��",msg_150:"���Ʋ���Ϊ��",msg_151:"��ֹ���ڲ���Ϊ��",msg_152:"��ֹ����Ӧ���ڵ�ǰ����",msg_153:"���Ƴ�����",msg_154:"�Ѻ�������",msg_155:"���չ���",msg_156:"����������",msg_157:"������ʱδ������",msg_158:"����ʱ��",msg_159:"�½�",msg_160:"����ʱ�佫��",msg_161:"�Ƴٵ�",msg_163:"��ȷ��Ҫɾ����",msg_164:"��ȷ��Ҫ������",msg_165:"��ȷ��Ҫ�ָ���",msg_166:"ˢ��",msg_167:"��3���ڵ�ʱ���¼�",msg_168:"��7���ڵ�ʱ���¼�",msg_169:"��ǰ",msg_170:"����ǰ",msg_171:"��",msg_172:"�� ",msg_173:"����ɹ���",msg_174:"����ʧ�ܡ�",msg_175:"ɾ�����޷��ָ����Ƿ�ɾ������־?",msg_176:"ɾ���ɹ���",msg_177:"ɾ��ʧ�ܡ�",msg_178:"ɾ�����޷��ָ����Ƿ�ɾ��������?",msg_179:"����ʧ�ܡ�",msg_180:"�ظ���",msg_181:"����",msg_182:"���� ",msg_183:"�˵�",msg_184:"�����ƶ�",msg_185:"�����ƶ�",msg_186:"�����ƶ�",msg_187:"�����ƶ�",msg_188:"�Ŵ�",msg_189:"��С",msg_190:"�ʺϴ���",msg_191:"ȫ����ʾ"};td_lang.general={msg_1:"�ϴ��ɹ�",msg_2:"�����ϴ�...",msg_3:"ͼƬ�����ϴ����.",msg_4:"ֹͣ",msg_5:"��ѡ��",msg_6:"ȷ��Ҫɾ��ѡ���ļ���?",msg_7:"������ѡ��һ��ͼƬ",msg_8:"ֻ��ѡ��һ��ͼƬ��������",msg_9:"����Ŀ¼��",msg_10:"��ʾĿ¼��",msg_11:"���ܿ���Ӵ...",msg_12:"��ȷ��Ҫɾ����",msg_13:"���Ļ�̫����...",msg_14:"���ڴ���...",msg_15:"����һ��΢Ѷ�ѱ�ɾ��...",msg_16:"������ʾ��...",msg_17:"���������ҳ�治������",msg_18:"���ڶ�ȡ����...",msg_19:"����XMLHttp����ʧ�ܣ�",msg_20:"�������ݲ���Ϊ��",msg_21:"�����ύ�ɹ�",msg_22:"�ش����ݲ���Ϊ��",msg_23:"���ύ�ɹ�",msg_24:"�����΢Ѷ...",msg_25:"ѡ����ļ��ѱ��",msg_26:"�뵽Ŀ��Ŀ¼�н��С�ճ��������",msg_27:"��¼",msg_28:"�û���¼",msg_29:"�û�����",msg_30:"����",msg_31:"�û�������Ϊ�գ�",msg_32:"���벻��Ϊ�գ�",msg_33:"�û��������벻�ԣ������µ�¼!",msg_34:"�� %s �ˣ�%s ������"};td_lang.general.email={loading:"������...",empty:"������",readmore:"��ʾ����",cancel:"ȡ��"};td_lang.general.settingguide={msg_1:"������ȷ��������",msg_2:"������������벻һ��",msg_3:"���볤��ӦΪ",msg_4:"λ",msg_5:"�������к��зǷ��ַ�!",msg_6:"�������ͬʱ������ĸ������",msg_7:"�����벻����ԭ������ͬ",msg_8:"��������ȷ���ֻ�����",msg_9:"��������ȷ�Ĺ����绰",msg_10:"��������Ч��E-mail��ַ",msg_11:"���Ѿ���д�˲�����Ϣ����Ҫ������",msg_12:"�޸ĳɹ�",msg_13:"��ȷ���˳���������",msg_14:"�����ԭ�������"}
td_lang.general.note={msg_1:"���༭��",msg_2:"������",msg_3:"�����ʼ�",msg_4:"����΢Ѷ",msg_5:"ȷ��ɾ��������ǩô��",msg_6:"ɾ��"}
td_lang.general.weixunshare={send_btn_text:"����",close_btn_text:"�ر�",record_btn_text:"�����ʼ¼��",cancel_btn_text:"ȡ��",delimage_btn_text:"ɾ����ͼƬ",uploadimage_btn_text:"����ϴ�ͼƬ",tips_default:"������һ����������",tips_topic:"��������������Ҫ˵�Ļ���",insert_topic:"���뻰��",insert_emotion:"�������",insert_pic:"����ͼƬ",insert_voice:"¼������",insert_person:"�ᵽ��/��",tips_publish:"��Ctrl+Enter������",tips_suggest:"ѡ�����@���˻���ֱ������",tips_nomoredata:"���޸�������",tips_image_type:"ͼƬ��ʽ֧�� jpg��gif��png"};td_lang.general.workflow={msg_1:"ȷ��Ҫ���˹����ָ���ִ������",msg_2:"ȷ��Ҫǿ�ƽ�����ѡ������",msg_3:"Ҫ����������������ѡ������һ�",msg_4:"��ע",msg_5:"ȡ����ע",msg_6:"ȷ��Ҫɾ����ѡ������",msg_7:"�ù�����ɾ��",msg_8:"�ù���δ��ɾ��������ϵϵͳ����Ա��",msg_9:"ȷ��Ҫ�����ù���������",msg_10:"�����ѳɹ�",msg_11:"��һ������δ����ʱ���ջ������������°���ȷ��Ҫ�ջ���",msg_12:"��û��Ȩ�ޣ�",msg_13:"�Է��ѽ��գ������ջ�",msg_14:"�����ѻ���",msg_15:"��ί������δ����ʱ���ջ����°���ȷ��Ҫ�ջ���",msg_16:"��",msg_17:"Ҽ",msg_18:"��",msg_19:"��",msg_20:"ȷ��Ҫɾ���ò���ô��",msg_21:"�����������",msg_22:"������Ա",msg_23:"��д�ֶ�",msg_24:"���첿��",msg_25:"�����ɫ",msg_26:"ɾ������",msg_27:"ɾ���ò���",msg_28:"�½�����",msg_29:"���沼��",msg_30:"ˢ����ͼ",msg_31:"��",msg_32:"��",msg_33:"½",msg_34:"��",msg_35:"��",msg_36:"��",msg_37:"ʰ",msg_38:"��",msg_39:"Ǫ",msg_40:"��",msg_41:"��",msg_42:"Ԫ",msg_43:"��",msg_44:"��",msg_45:"��",msg_46:"��",msg_47:"Сʱ",msg_48:"��",msg_49:"���ڸ�ʽ��Ч",msg_50:"ȷ��Ҫ��ע�˹���ô��",msg_51:" ��ʽ����,����example@126.com",msg_52:" ��ʽ����,ӦΪ����",msg_53:" ��ʽ����,ӦΪ��������",msg_54:" ��ʽ����,ӦΪ��������123.45",msg_55:"�й�������ҵ��Ϣ����",msg_56:"������ѡ��һ����¼",msg_57:"ȷ��Ҫɾ�����˼�¼��",msg_58:"����д���̺�Ϊ[%s]��%s��Ϣ",msg_59:"ί��",msg_60:"����",msg_61:"��ע",msg_62:"���������������",msg_63:"��һ��",msg_64:"�޸ı�",msg_65:"���������",msg_66:"Ԥ��",msg_67:"����",msg_68:"����",msg_69:"��ʷ�汾",msg_70:"ɾ��",msg_71:"��ͼ",msg_72:"�б�",msg_73:"�½�������",msg_74:"�༭������",msg_75:"�½����̷���",msg_76:"�༭���̷���",msg_77:"��������Ų���Ϊ�գ�",msg_78:"��������ű���Ϊ���֣�",msg_79:"���������Ʋ���Ϊ�գ�",msg_80:"���̷�����Ų���Ϊ�գ�",msg_81:"���̷�����ű���Ϊ���֣�",msg_82:"���̷������Ʋ���Ϊ�գ�",msg_83:"�ø���Ԫ���µ�����Ѿ����ڣ�������ѡ����д��",msg_84:"�ø���Ԫ���µ������Ѿ����ڣ�������ѡ����д��",msg_85:"�½�������ɹ���",msg_86:"�༭������ɹ���",msg_87:"�½����̷���ɹ���",msg_88:"�༭���̷���ɹ���",msg_89:"������1-%s��ֵ",msg_90:"��ѡ���ϴ���",msg_91:"�����Ʋ���Ϊ��",msg_92:"ȷ��Ҫ���˰汾�ָ�ΪӦ�ð汾���⽫���ɻָ���",msg_93:"�ѽ��汾",msg_94:"�ָ���ΪӦ�ð汾",msg_95:"ȷ��Ҫɾ���ð汾���⽫���ɻָ���",msg_96:"��ѡ��Ҫѡ�еĲ��裡",msg_97:"��ѡ����ȷ�Ĳ��裡",msg_98:"û�п�ѡ������!",msg_99:"��ѡ��Ҫ��ǰ�Ĳ��裡",msg_100:"��ѡ��Ҫ���µĲ��裡",msg_101:"��ֹ��ǩ",msg_102:"�����ǩ",msg_103:"ǿ�ƻ�ǩ",msg_104:"���³ɹ���",msg_105:"����ʧ�ܣ�",msg_106:"Ҫִ��ɾ��������������ѡ������һ����",msg_107:"ɾ���󽫲��ɻָ���ȷ��Ҫɾ����",msg_108:"�����˲���Ϊ�գ�",msg_109:"����ʱ�䲻��Ϊ�գ�",msg_110:"��ѡ����Ȩ���ͣ�",msg_111:"��ָ����Ȩ��Χ��",msg_112:"��ָ������Χ��",msg_113:"������ģ�����ƣ�",msg_114:"��ѡ��ģ�����",msg_115:"��ѡ��ģ���ļ���",msg_manage_priv_type_0:"��ִ�в�������ѯ��ת����ί�С�������ɾ�����༭������",msg_manage_priv_type_1:"��ִ�в�������ѯ��ת����ί�С�������ɾ��",msg_manage_priv_type_2:"��ִ�в�������ѯ��ת����ί��",msg_manage_priv_type_3:"��ִ�в�������ѯ(���Բ鿴������Ϣ)",msg_manage_priv_type_4:"��ִ�еĲ�������ѯ���༭(���̽���������޸ı�)",msg_manage_priv_type_5:"��ִ�еĲ�������ѯ������",msg_118:"���ݴ��������Ժ�...",msg_119:"���ݴ������",msg_120:"���ݲ���Ҫ������ȷ�Ϻ��ٲ�����",msg_121:"��ѡ��Ҫ������ļ���",msg_122:"���ϴ����ļ�����Ϊ",msg_123:"���ļ�����Ϊ.xls�� .xlsx����",msg_124:"�޸��ֶ�����",msg_125:"����Դ���Ʋ���Ϊ��!",msg_126:"����Դ��������Ϊ��!",msg_127:"����Դ���Ʋ��ܺ�����!",msg_128:"ȷ��ɾ�������������������⽫���ɻָ�",msg_129:"��ѡ",msg_130:"��ѡ",msg_131:"ͣ��",msg_132:"�༭",msg_133:"ɾ��",msg_134:"ȷ��ɾ����ѡ��Ŀ��",msg_135:"ģ�鲻��Ϊ�գ�",msg_136:"�ֶβ���Ϊ�գ�",msg_137:"�ֶβ���Ϊ�գ�",msg_138:"�������Ϊ�գ�",msg_139:"����ɹ���",msg_140:"���³ɹ���",msg_141:"���̼���...",msg_142:"�ֶ����Ʋ���Ϊ��",msg_143:"�ֶ���������Ϊ��",msg_144:"��",msg_145:"�ı�",msg_146:"����",msg_147:"ɾ��",msg_148:"ȷ��Ҫɾ�����ֶ���",msg_149:"�༭",msg_150:"ȷ��Ҫɾ��������Դ��",msg_151:"ȷ��Ҫ��ո�����Դ������������",msg_152:"��ѡ�񸽼���",msg_153:"���ϴ����ļ�����Ϊ",msg_154:"���ļ�����Ϊ.xls�� .xlsx����",msg_155:"����������ȷ�ı�ʶ����",msg_156:"�ֶ����Ʋ����ظ���",msg_157:"��ѡ�����Ա��",msg_158:"��������Դ��",msg_159:"���óɹ���",msg_160:"����Դ���Ʋ��ܺ��ո�",msg_161:"�༭",msg_162:"����Ϊ�ı�������ΪΨһ�ֶ�",msg_163:"����Դ��ʾ���Ѵ��ڣ�",msg_164:"��������Դ�ɹ���",msg_165:"ȷ��Ҫɾ���ñ����⽫ɾ�����������ֶ������Ҳ��ɻָ���",msg_166:"ɾ���ɹ���",msg_167:"����ǰĿ¼��û�б���",msg_168:"�봴����",msg_169:"���Ե�...",msg_170:"ȷ��Ҫ�����˱���",msg_171:"ȫ��",msg_172:"���������¼�Ŀ¼",msg_173:"û������������ƥ����",msg_174:"�÷����´��ڱ�,����ɾ������ɾ������",msg_175:"δ������ϵͳ����Ĺؼ��֣����������룡",msg_intelligent_1:"�Ƿ������޸����������ѡ�Ĭ�Ͼ����ˣ�",msg_intelligent_2:"�Ƿ������޸����������ѡ�",msg_176:"�˿ڱ���Ϊ4λ����",msg_177:"��ʱǰ����ʱ�����Ϊ����",msg_178:"��ʱ������ʱ�����Ϊ����",msg_179:"��ѡ���������õ����̲��裡",msg_180:"ɾ���󽫲��ɻָ���ȷ��ɾ���������д��ĸ��OK��",msg_181:"ȷ��Ҫɾ������������־��",msg_182:"ȷ��Ҫɾ�����й�����־��",msg_183:"�÷�������ӷ��࣬����ɾ�������ӷ��࣡",msg_184:"�÷����´�������,����ɾ��������ɾ������",msg_185:"����������Ų��ܳ�����λ",msg_186:"���̷�������Ų��ܳ�����λ",msg_187:"���Ѿ���д�˲�����Ϣ,��Ҫ������?",msg_188:"���Ѿ�ǩ�£�����ɾ������ǩ�£�",msg_189:"��дǩ�¼���ʧ�ܣ�����ؼ��Ƿ���ȷ��װ��",msg_190:"��",msg_191:"������Ӣ����ĸ�����֣�",msg_192:"����ǰĿ¼��û�����̻���δ�����½�Ȩ��",msg_193:"�ֶ����Ʊ�������ĸ���»��߻����ֺ���ĸ��ϣ�",msg_194:"�½�����Դ�������һ���ֶΣ�",msg_195:"����ʧ�ܣ�",msg_196:"�ֶ����Ʋ��ܺ�����!",msg_197:"��������ȷ���ֶ����ͣ�",msg_198:"��",msg_199:"���ٱ���һ���ֶΣ�",msg_200:"�ֶ����Ʋ����Ǵ����֣�",msg_201:"�ֶ����Ʋ��ܺ������ַ���",msg_202:"��ȷ�Ϸ�����ǰ��д��Ϣ���رյ�ǰ������?",msg_203:"����ֵ���ظ���",msg_204:"ȷ��Ҫ�ջش˹�����",msg_205:"�����ʽ����ȷ��",msg_206:"��ʾ",msg_207:"����-���칤��",msg_208:"����-��ע����",msg_209:"����-������",msg_210:"����-��Ṥ��",msg_211:"�ɹ���ע�˹�����",msg_212:"���Ѿ���ע�˴˹������޷��ٴι�ע��",msg_213:"����-ȫ������",msg_214:"����-ί�й���",msg_215:"ȫ������",msg_216:"����д�����Ա",msg_217:"��������ɹ�",msg_218:"ȷ��Ҫת��˹��������ļ���",msg_219:"ȷ��Ҫ�鵵������������",msg_220:"����дҪת������Ա��Ϣ",msg_221:"��δ����ֵ��",msg_222:"�ֶ�����:",msg_223:"���ֶ����ó�Ψһ��ʶ,���������ֵ��",msg_224:"�ֶ�����:",msg_225:"���ֶ����ó�Ψһ��ʶ,����ֵ�����ظ���",msg_227:"��",msg_228:"����һ���裺",msg_229:"��û�д�Ȩ��!",msg_230:"����ʧ�ܣ����̲��費����!",msg_231:"����ʧ�ܣ������Ѿ�ִ�����!",msg_232:"����ʧ�ܣ������Ѿ�����!",msg_233:"����ʧ�ܣ���ǰ��������������Ԥ�貽��!",msg_234:"����ʧ�ܣ�ִ�в����˲��ǵ�ǰ�����˲�����ִ�й������!",msg_235:"����ʧ�ܣ������쳣����ϵ������!",msg_236:"��������",msg_237:"��������",msg_238:"����������ʽ",msg_239:"������������ʽ",msg_240:"���",msg_241:"ѡ�����������������",msg_242:"�˲���Ϊǿ�Ʋ���",msg_243:"������[ %s ]��δ������ϣ�����ת�����̣�",msg_244:"��ָ������ѡ�����������",msg_245:"��ָ������ѡ����ľ�����",msg_246:"�ɹ����ʹ߰���Ϣ",msg_247:"����Ȩ���Ĵ˲���Ĭ����Ա",msg_248:"����Ȩ�������������ѡ��",msg_249:"��ѡ��Ҫת������һ����",msg_250:"ȷ��Ҫ����������",msg_251:"�����ˣ�",msg_252:"�Ƚ��������죺",msg_253:"�������˻�ǩ��",msg_254:"�½�����",msg_255:"������ѡ��һ���˻ز��裡",msg_256:"�����˻سɹ� ",msg_257:"��ȷ�ϱ���༭������",msg_258:"������ί�����ѣ�",msg_259:"�����µĹ�����Ҫ����",msg_260:"�����ѽ���",msg_261:"������[ %s ]��δ������ϣ�ȷ��Ҫת����һ����",msg_262:"��ӻ�ǩ�˲����ɹ�",msg_263:"������[ %s ]��ӳɹ�",msg_264:"��[ %s ]�Ѿ��Ǳ�����İ����˲���Ҫ���",msg_265:"��ӻ�ǩ�˲���ʧ��",msg_266:"ȷ��Ҫǿ��ת����һ����",msg_267:"���ش��칤��",msg_268:"����",msg_269:"���淵�ش��칤��",msg_270:"���淵��",msg_271:"�޸ĳɹ���",msg_272:"ȷ��Ҫ���ٵ�ǰ��ѯ�������й�����",msg_273:"�˲�������ǿ�Ʋ�����������ûѡ��ķ�֧���裡",msg_274:"��̬ת���������Ʋ���Ϊ�գ�",msg_275:"����Դ���Ʋ��ܳ���40���ַ���",msg_276:"�ֶ����Ʋ��ܳ���40���ַ���",msg_277:"ȷ��Ҫ���ٵ�ǰ��ѡ�Ĺ�����",msg_278:"ȷ��Ҫɾ����ǰ��ѯ��������ί�й�����",msg_279:"ȷ��Ҫɾ����ǰ��ѡ��ί�й�����",msg_280:"ȷ��Ҫ��ԭ��ǰ��ѯ�������й�����",msg_281:"ȷ��Ҫ��ԭ��ǰ��ѡ�Ĺ�����",msg_282:"ȷ��Ҫ����ѡ�����ָ���ִ������",msg_283:"ȷ�ϻ�ԭ�������д��ĸ��OK��",msg_284:"����д��ע���ݣ�",msg_285:"�˻��������Ϊ��",msg_286:"�������ƻ��ĺŲ���Ϊ��",msg_287:"��ָ������Χ��",msg_288:"�˹�����һ�����д�����������ȷ�������½��򵼣�",msg_289:"������������������վ����˵Ĳ������Ƿ������",msg_290:"ȷ��Ҫִ��һ��ת��������",msg_291:"������߰�����",msg_292:"���������������ˮ�ţ�%s,��������%s�Ĺ���",msg_293:"������һ��ת��������",msg_294:"û�д˹����İ���Ȩ��",msg_295:"��ѡ���Ŀ",msg_296:"��ѡ���/��",msg_297:"����д���",msg_298:"�뱣�ּ�����Ϣ�Ľ��ƽ�⣡",msg_299:"��ѡ��ҵ������",msg_300:"��ѡ������",msg_301:"��ѡ��ƾ֤��",msg_302:"����д������",msg_303:"����д���",msg_304:"��ѡ��ƾ֤���",msg_305:"��ѡ���Ƶ�����",msg_306:"��ѡ���������",msg_307:"������Ϊ����",msg_308:"��չ�ؼ�JS����ʧ�ܣ�������ٴγ��ԣ�",msg_309:"����������Ϊ����0����",msg_310:"��ű���Ϊ����0����",msg_311:"��������ͷ����Ϊ0",msg_312:"��ſ�ͷ����Ϊ0",msg_313:"��ѡ��ժҪ",msg_314:"�����ѻָ�"};td_lang.system={};td_lang.system.workflow={msg_2:"�����������",msg_3:"����Ȩ��",msg_4:"��д�ֶ�",msg_5:"�����ֶ�",msg_6:"��������",msg_7:"��¡�ò���",msg_8:"ɾ���ò���",msg_9:"�½�����",msg_10:"���沼��",msg_11:"ˢ����ͼ",msg_12:"ȷ��Ҫɾ���ò���ô��",msg_13:"ȷ��Ҫ��¡�ò���ô��",msg_14:"������ʽ����С���Ÿ�������ȣ�",msg_15:"������ʽ���������Ÿ�������ȣ�",msg_16:"������ʽ���Ҵ����Ÿ�������ȣ�",msg_17:"ȫѡ",msg_18:"ȡ��",msg_19:"�������Ʋ���Ϊ�գ�",msg_20:"������Ϊ�գ�",msg_21:"���̷��಻��Ϊ�գ�",msg_22:"�������Ͳ���Ϊ�գ�",msg_23:"��������ű���Ϊ����",msg_24:"��ż���������Ϊ����",msg_25:"���λ������Ϊ����",msg_prcs_1:"������Ų���Ϊ�գ�",msg_prcs_2:"�������Ʋ���Ϊ�գ�",msg_prcs_3:"�����þ���Ȩ�ޣ�",msg_prcs_4:"���̲�����ţ�%s �Ѿ����ڣ����̲�����Ų����ظ���",msg_prcs_5:"���������Ͳ���Ϊ�գ�",msg_prcs_6:"��ѡ�񷵻ز���",msg_prcs_7:"�����Ϣ����ʧ��",msg_26:"ģ�����Ʋ���Ϊ�գ�",msg_27:"�����ظ���",msg_28:"ֵ�в��ܺ��е�����",msg_29:"���̲��費��Ϊ�գ�",msg_30:"���������",msg_31:"��Ա����Ϊ�գ�",msg_32:"���ܲ��Ų���Ϊ�գ�",msg_33:"ȷ��ɾ���ñ���Ȩ����",msg_34:"�������̲���Ϊ�գ�",msg_35:"�������Ʋ���Ϊ�գ�",msg_36:"��ģ�������Ѵ��ڣ�",msg_37:"�ñ������Ѵ��ڣ�",msg_38:"����ӷ���Χ��",msg_39:"��ˮ��%sδ�ܽ�������û�д�Ȩ��",msg_40:"��ˮ��%sδ��ɾ������û�д�Ȩ��",msg_41:"ӳ���ϵ[%s]�Ѵ��ڣ�",msg_basis:"��������",msg_operator:"������",msg_intelligent:"����ѡ��",msg_circulation:"��ת����",msg_writable:"��д�ֶ�",msg_hidden:"�����ֶ�",msg_condition:"��������",msg_limit:"����ʱ��",msg_unit:"������",msg_remind:"��������",msg_aip:"����������",msg_42:"����ʧ�ܣ����ֱ���ظ��Ŀؼ���\n\n",msg_43:"��ǰ�Ŀؼ���Ϣ��%s�ؼ����ƣ�%s���ؼ����ͣ�%s���ؼ���ţ�%s%s",msg_44:"�ظ��Ŀؼ���Ϣ��%s�ؼ����ƣ�%s���ؼ����ͣ�%s���ؼ���ţ�%s%s",msg_45:"��ǰ�Ŀؼ���Ϣ��%s�ؼ����ƣ�%s���ؼ����ͣ�%s���ؼ���ţ�%s%s",msg_46:"�ظ��Ŀؼ���Ϣ��%s�ؼ����ƣ�%s���ؼ����ͣ�%s���ؼ���ţ�%s%s",msg_47:"����ʧ�ܣ����������ظ��Ŀؼ���\n\n",msg_48:"�ؼ�����: %s ������ѡ��ɶ���",msg_49:"",msg_50:"δ֪�ؼ�",msg_51:"�����ݲ���Ϊ�գ�",msg_52:"����ѡ������������",msg_53:"����ѡ�������ֶ�",msg_54:"ɾ��ӳ��",msg_55:"��ǰ�����ؼ���%sδ�ҵ���Ч�����ؼ���%s",msg_56:"��ѡ��ı����ݿؼ���ϵͳ���ݴ��ڲ��죬���ڱ��������������д��",msg_57:"���ֶ������"};td_lang.pda={msg_1:"���޸�����Ϣ"};td_lang.crm={};td_lang.crm.apps={update_1:"���������Զ�����2010�����ݣ�%s���ȷ�ϼ�����һ��",update_2:"�������̽ϳ��������ĵȴ�������رձ�ҳ���ر��������%s���ȷ�ϼ�����һ��",update_3:"���������ѳɹ����!%s�Ƿ��������·���Ȩ�ޣ�",email:"����һ����Ч���ʼ���ַ��",phone:"����һ����Ч�ĵ绰���룡",url:"����һ����Ч����ַ",date:"����һ����Ч�����ڣ������磺2011-05-15��",datetime:"����һ����Ч������ʱ�䣡�����磺2011-05-15 10:58:00��",time:"����һ����Ч��ʱ�䣡�����磺10:58:00��",int:"����һ����Ч��������",float:"����һ����Ч�ĸ�������",money:"����һ����Ч�Ľ�",percent:"����һ����Ч�İٷ�����",notnull:"%s:����Ϊ�գ�",undefined:"����[%s]������֤���ʽδ���壡",length_over:"%s:���ȴ���%sλ��",msg_1:"%s:����Ϊ������������Ϊ�������㣩",msg_2:"%s:����Ϊ�Ǹ�����",msg_3:"%s:���ܳ���%sλ��Ч���֣�",msg_4:"%s:С������ܳ���%sλ��Ч���֣�",msg_5:"Excel�ļ�ֻ��Ϊxls,xlsx��ʽ",msg_6:"��ѡ��Ҫ������ļ���",msg_7:"û������������ʽ��",msg_8:"����",msg_9:"���֤��֤",msg_10:"����֤",msg_11:"�绰��֤",msg_12:"�ֻ���֤",msg_13:"��ַ��֤",msg_14:"�ʼ���֤",msg_15:"����һ����Ч�ĵ绰���룡",msg_16:"�ֻ�������������",msg_17:"���֤��������",msg_18:"��ַ��������",msg_19:"�ʼ���������",msg_20:"��������",msg_21:"���֤�Ų���Ϊ�գ����������룡",msg_22:"���֤��λ�����ԣ����������룡",msg_23:"���֤�Ų���ȷ�����������룡",msg_24:"��%s��������������",msg_25:"��%s����������Ϊ�գ�",msg_26:"��%s�������ĵ�һ��ʱ�䲻�ܴ��ڵڶ���ʱ��",msg_27:"��%s��������ֵ���ܺ��������ַ�",msg_28:"�������",msg_29:"��ӷ���",msg_30:"ѡ���ϵ��",msg_31:"��",msg_32:"��",msg_33:"��ѯ",msg_34:"����",msg_35:"δ����ͼ��",msg_36:"��%s������",msg_37:"����Ϊ�գ�",msg_38:"�ĵ�һ��ʱ�䲻�ܴ��ڵڶ���ʱ��",msg_39:"��ֵ���ܺ��������ַ�",msg_40:"���ٷ���",msg_41:"���˷���",msg_42:"����ʱ��ѯ",msg_43:"����",msg_44:"����",msg_45:"��",msg_46:"�����ţ�",msg_47:"����ԭ��",msg_48:"����ʧ�ܣ�",msg_49:"���ͼƬ",msg_50:"�Ƿ�ȷ��ɾ����",msg_51:"ɾ��ʧ�ܣ�δ�ҵ�������",msg_52:"����ѡ��",msg_53:"���������У��Ժ󿪷�",msg_54:"����ѡ��һ����¼",msg_55:"ִ��Ȩ�������Ȩ�޲�������޷�����",msg_56:"������ѡ��һ����¼",msg_57:"����ִ��Ȩ�������Ȩ�޲�����ļ�¼���޷�����",msg_58:"��ѡ��һ����¼��",msg_59:"δ��ȡ��ָ��ģ���·��",msg_60:"ȷ��Ҫɾ��ѡ�еļ�¼��",msg_61:"�ö���ֻ֧�ֵ�����¼��",msg_62:"ȷ��Ҫ�ָ���ѡ������",msg_63:"�ָ��ɹ�",msg_64:"ȷ��Ҫɾ������ͼ��",msg_65:"�����½�",msg_66:"��%s�����ֶ��������ֶ�ֵδָ��",msg_67:"�ٶȵ�ͼ��ַ��ѯ",msg_68:"���ʽ��",msg_69:"%s:���ȴ���%sλ������ϵ����Ա��",msg_70:"%s:����Ϊ������������Ϊ�������㣩",msg_71:"ȷ��Ҫɾ����ǰ��¼��"};td_lang.crm.inc={msg_1:" ����Ϊ��",msg_2:"��Ч ",msg_3:"��ѡ��һ����¼�༭!",msg_4:"���ѡ��һ����¼�༭!",msg_5:"���ѡ��һ����¼!",msg_6:"��ѡ��һ����¼ɾ��!",msg_7:"������ѡ��һ����¼!",msg_8:"û��ƥ�䵽N!",msg_9:"ƥ�����!",msg_10:"�ж��N!",msg_11:"���������ָ�ʽ",msg_12:"������������ʽ��",msg_13:"�����ϸ�������ʽ��",msg_14:"�����Ͻ���ʽ��",msg_15:"���������ڸ�ʽ��",msg_16:"������ʱ���ʽ��",msg_17:"����������ʱ���ʽ��",msg_18:"���������֤�Ÿ�ʽ��",msg_19:"�����������ַ��ʽ��",msg_20:"�����������ַ��ʽ��",msg_21:"���������������ʽ��",msg_22:"�����ϵ绰�����ʽ��",msg_23:"�������ֻ������ʽ��",msg_24:"С�����ֻ�ܱ�����λ��Ч���֣�",msg_25:"���֤��ʽ����ȷ",msg_26:"����ȷ����ҳ��",msg_27:"������1-%s֮�����ֵ",msg_28:"��ʼģ��ʧ��",msg_29:"��ѡ���Ӧ��Ӧ��",msg_30:"��ѡ���Ӧ�ͻ�",msg_31:"�����������֧��AJAX��",msg_32:"����������ѡ��һ�����ϵļ�¼!",msg_33:"��ͬ�ĵ�ǰ�׶β������տ�!",msg_34:"������ѡ��һ����¼������!",msg_35:"ȷ��Ҫɾ��ѡ�еļ�¼��",msg_36:"��ͬ�ĵ�ǰ�׶β�����ɾ��!",msg_37:"����",msg_38:"������",msg_39:"��ʼΪ",msg_40:"��βΪ",msg_41:"����",msg_42:"������",msg_43:"С��",msg_44:"����",msg_45:"С�ڻ����",msg_46:"���ڻ����",msg_47:"��֧��XMLDOM����",msg_48:"������...",msg_49:"����ʧ��",msg_50:"���ܽ���XML�ĵ�",msg_51:"��������Ϊ��",msg_52:"����ȷ����������ֵ",msg_53:"���۲���Ϊ��",msg_54:"����ȷ����۸��ֵ",msg_55:"��Ʒ��ϸ",msg_56:"����",msg_57:"��Ӳ�Ʒ",msg_58:"�ܼ�",msg_59:"�������֧��.",msg_60:"�����У����Ժ򡭡�",msg_61:"�޷����� XMLHttpRequest ����",msg_62:"���",msg_63:"ȷ��Ҫ���%s�б���",msg_64:"Ϊ��",msg_65:"��Ϊ��",msg_66:"������֮һ",msg_67:"��������֮һ",msg_68:"��֮��",msg_69:"����",msg_70:"����",msg_71:"����",msg_72:"����",msg_73:"����",msg_74:"����",msg_75:"����",msg_76:"����",msg_77:"����",msg_78:"��ȥ7��",msg_79:"��ȥ30��",msg_80:"��ȥ60��",msg_81:"��ȥ90��",msg_82:"δ��7��",msg_83:"δ��30��",msg_84:"δ��60��",msg_85:"δ��90��",msg_86:"7��֮ǰ",msg_87:"30��֮ǰ",msg_88:"60��֮ǰ",msg_89:"90��֮ǰ",msg_90:"��ȥ15��",msg_91:"δ��15��",msg_92:"15��֮ǰ",msg_93:"��ǰ�û�",msg_94:"��ǰ����",msg_95:"����֮ǰ"};td_lang.crm.studio={chart_1:"��ͼ��",chart_2:"��ͼ",chart_3:"��ϵ����ͼ",chart_4:"��ά��ͼ",chart_5:"��ϵ����ά��ͼ",chart_6:"��ͼ",chart_7:"��ά��ͼ",chart_8:"��ͼ",chart_9:"����ͼ",chart_10:"��ϵ������ͼ",chart_11:"������ͼ",chart_12:"X��",chart_13:"Y��",chart_14:"����",chart_15:"����",msg_1:"ȷ��Ҫ������ǰ������?",msg_2:"�Ӳ˵�����Ϊ������",msg_3:"�Ӳ˵�����ֻ��Ϊ��������",msg_4:"�Ӳ˵��������Ϊ��λ",msg_5:"�˵�����Ϊ������",msg_6:"ģ������Ϊ������",msg_7:"ģ������Ϊ������",msg_8:"���ֶ���Ϊ������",msg_9:"���ֶ�����Ϊ������",msg_10:"�Ƴ�����",msg_11:"����ֶ�",msg_12:"%s:������д!",msg_13:"ֻ��",msg_14:"�Ƽ���д",msg_15:"������д",msg_16:"������",msg_17:"���",msg_18:"��������",msg_19:"ȫѡ",msg_20:"ȷ��",msg_21:"��ѡ����ӵ��ֶ�!",msg_22:"ȡ��",msg_23:"�Ƿ�ȷ�Ͻ����ֶΡ�%s����",msg_24:"ȷ��Ҫɾ����ģ����?",msg_25:"������ɾ������--",msg_26:"�������벻��",msg_27:"��ָ������δѡ��,����!",msg_28:"������ѡ��һ����ɫ��",msg_29:"����дģ������",msg_30:"��д��ģ�������в��ܺ��������ַ�",msg_31:"δ֪��ģ�����",msg_32:"��ѡԪ�ؼ��ڵ�һλ",msg_33:"��ѡԪ�ؼ������һλ",msg_34:"���ڲ����ƶ����ֶΣ�",msg_35:"�ֶΡ�%s������ʧ�ܣ�����ϵ����Ա��",msg_36:"�Ƿ�ȷ��ȡ����",msg_37:"�ֶ����Ʋ���Ϊ�գ�",msg_38:"��ѡ���ֶ������ͣ�",msg_39:"��ѡ���ֶ������ͣ�",msg_40:"��%s��",msg_41:"�����ظ����ֶ�����",msg_42:"��󳤶Ȳ���Ϊ�գ�",msg_43:"С�����Ȳ���Ϊ�գ�",msg_44:"ѡ��ģ�岻��Ϊ�գ�",msg_45:"��ʾ��ʽ����Ϊ�գ�",msg_46:"��ʼ��Ų���Ϊ�գ�",msg_47:"��ż������Ϊ�գ�",msg_48:"���λ������Ϊ�գ�",msg_49:"���λ������Ϊ�㣡",msg_50:"��ѡ��������",msg_51:"����ѡ��ѡ��ģ�壡",msg_52:"����ѡ������ģ�飡",msg_53:"����ѡ���б���ͼģ�壡",msg_54:"���ʽ{N}��������ʾ��ʽ����ĩβ!",msg_55:"���ڶ�����ʽ{N}!",msg_56:"��ʾ��ʽ�ѱ�����Ƿ����ñ�ţ����½���¼���ӳ�ʼ��ż���",msg_57:"��ѡ��ģ�飡",msg_58:"������Ų���Ϊ��",msg_59:"������Ų���Ϊ��",msg_60:"��ʾ���Ʋ���Ϊ��",msg_61:"�ڲ����Ʋ���Ϊ��",msg_62:"�Ƿ�ȷ�������ֶΡ�%s����",msg_63:"�ֶΡ�%s������ʧ�ܣ�����ϵ����Ա��",msg_64:"��ѡ�����ֶ�",msg_65:"��ѡ�������ֶ�",msg_66:"�޿���ɾ��������",msg_67:"�޿��Իָ�������",msg_68:"ȷ��Ҫ�ָ�����������?",msg_69:"�����ݼ�¼",msg_70:"��ͼ����Ϊ������",msg_71:"��%s�����ֶλ�����ʽδָ��",msg_72:"��ɫ�ֶ�'%s'����ͼ�ֶ���δ�ҵ�,��ȷ֤���ֶ��Ƿ�����ͼ��ʾ�ֶ���",msg_73:"��%s�����ֶλ��������ֶ�ֵ����ɫδָ��",msg_74:"�ֶ��б�",msg_75:"������",msg_76:"������",msg_77:"�ֶ�����",msg_78:"�����ֶ�",msg_79:"ģ�����Ʋ���Ϊ��!",msg_80:"�Ӳ˵����벻��Ϊ��!",msg_81:"�ֶ����Ʋ���Ϊ��!",msg_82:"��һ���ֶ�Ϊ����ʾ�ֶΣ����ͱ���'�ı�'!",msg_83:"����д��������",msg_84:"��д�ı��������в��ܺ��������ַ�",msg_85:"��ѡ����ܷ�ʽ��",msg_86:"��ѡ������ֶΡ�",msg_87:"�������ظ������顣",msg_88:"��",msg_89:"�����ܷ�ʽ",msg_90:"��ѡ�񱨱�����",msg_91:"����ʾ�����в��ܺ��������ַ�",msg_92:"���ֶ�",msg_93:"����д�е�һ����.",msg_94:"����д�е�һ����.",msg_95:"����д��һ����.",msg_96:"�е�",msg_97:"�е�",msg_98:"����",msg_99:"���������ظ������顣",msg_100:"��ѡ��һ����������",msg_101:"�ֶ��ظ����ã�����",msg_102:"Ĭ��ֵ���ȴ���%s",msg_103:"�ֶγ������ٱ�С��λ����2",msg_104:"ȡ��ѡ��",msg_105:"��ѡ",msg_106:"ϵͳ�Դ���ͼģ�岻����ɾ����"};td_lang.crm.platform={msg_1:"���������У������ĵȺ�...",msg_2:"δ�ҵ�Ŀ�경�裡",msg_3:"��һ��",msg_4:"��һ��",msg_5:"����",msg_6:"ȡ��",msg_7:"��ʾ��������ģ��",msg_8:"����",msg_9:"�ö�",msg_10:"�õ�",msg_11:"����",msg_12:"����",msg_13:"ȫѡ",msg_14:"������ͬ��%s--%sѡ��",msg_15:"������ͬ��ѡ��ֵ%s",msg_16:"δ�������¼�JS",msg_17:"����",msg_18:"����"};td_lang.general.project={msg_1:"��Ŀ����",msg_2:"��Ŀ����ͼ",msg_3:"��������",msg_4:"������Ŀ",msg_5:"��Ŀ���",msg_6:"��Ŀ���"};td_lang.general.project.button={msg_1:"��������Ŀ",msg_2:"ˢ��"};td_lang.general.project.msg={msg_1:"����Ŀ",msg_2:"������ؼ���...",msg_3:"ȷ��Ҫɾ����ѡ��Ŀ��",msg_4:"Ҫɾ����Ŀ��������ѡ������һ�",msg_5:"��ѡ��Ŀ��ȫ��ɾ��",msg_6:"ȷ��Ҫ��������Ŀ��",msg_7:"����Ŀ������δ�����������Ƿ�ǿ�ƽ�����",msg_8:"ȷ��Ҫ�ָ�ִ�д���Ŀ��"};td_lang.general.project.guide={attribute:"���Ԥ��",user:"��д��ϵ��",task:"��һ������",file_sort:"��һ���ĵ�Ŀ¼",diy:"�Զ����ֶ�",approve:"��Ŀ������",no_null:"������Ŀ����Ϊ��",time:"��Ŀ�ƻ����ڵĽ���ʱ�䲻��С�ڿ�ʼʱ�䣡",number:"��������Ч����!"};td_lang.general.taskcenter={delay:"�Ƴ�",ignore:"����",reborn:"�ָ�",deleted:"ɾ��",notask:"��������"};td_lang.general.itask={msg_1:"�����ƶ�һ������",msg_2:"���󣺷Ƿ�����"};td_lang.general.itask.gantt={January:"һ��",February:"����",March:"����",April:"����",May:"����",June:"����",July:"����",August:"����",September:"����",October:"ʮ��",November:"ʮһ��",December:"ʮ����",Sunday:"��",Monday:"һ",Tuesday:"��",Wednesday:"��",Thursday:"��",Friday:"��",Satday:"��",wait:"���Ժ�..."};td_lang.ispirit={label_menu:"�˵�",label_workflow:"������",label_calendar:"�ճ̰���",label_search_help:"�������߰���",label_search_workflow:"�����������ĺ�",label_search_calendar:"�����ճ̰���",label_no_data:"�޷�������������",label_prcs_no:"��%s��"};td_lang.office_product={msg1:"�½��칫��Ʒ��",msg2:"�༭�칫��Ʒ��",msg3:"ɾ����ᵼ�¿���İ칫��Ʒ���Ҳ��ɾ�����Ƿ������",msg4:"�칫��Ʒ�����Ʋ���Ϊ��",msg5:"�������Ų���Ϊ��",msg6:"�����Ա����Ϊ��",msg7:"��Ʒ����Ա����Ϊ��",msg8:"�칫��Ʒ���Ʋ���Ϊ��",msg9:"�칫��Ʒ���ⲻ��Ϊ��",msg10:"�칫��Ʒ�����Ϊ��",msg11:"��ǰ��治��Ϊ��",msg12:"��ǰ������Ϊ����",msg13:"��;��������Ϊ���֣�",msg14:"��߾��������Ϊ���֣�",msg15:"��;����治�ܴ��ڵ�ǰ��棡",msg16:"��߾����治��С�ڵ�ǰ��棡",msg17:"��Ʒ���۱���Ϊ���֣�",msg18:"�칫��Ʒ�������ظ���"};td_lang.validation={required_1:"�˴����ɿհ�",required_2:"��ѡ��һ����Ŀ",required_3:"�����빳ѡ����",required_4:"���ڷ�Χ���ɿհ�",dateRange_1:"��Ч�� ",dateRange_2:" ���ڷ�Χ",dateTimeRange_1:"��Ч�� ",dateTimeRange_2:" ʱ�䷶Χ",minSize_1:"���� ",minSize_2:" ���ַ�",maxSize_1:"��� ",maxSize_2:" ���ַ�",groupRequired:"�����ѡ������һ����λ",min:"��СֵΪ",max:"���ֵΪ",past:"���ڱ�������",future:"���ڱ������� ",maxCheckbox_1:"���ѡȡ ",maxCheckbox_2:" ����Ŀ ",minCheckbox_1:"��ѡ�� ",minCheckbox_2:" ����Ŀ ",equals:"��������������ͬ������",creditCard:"��Ч�����ÿ����� ",phone:"��Ч�ĵ绰����",email:"�ʼ���ַ��Ч",integer:"������Ч������",number:"��Ч������",date:"��Ч�����ڣ���ʽ����Ϊ YYYY-MM-DD",ipv4:"��Ч�� IP ��ַ",url:"��Ч�� URL ",path:"��Ч��·�� ",nonNegative:"ֻ����Ǹ��� ",money:"��������ȷ��0.00 ",onlyNumberSp:"ֻ�������� ",onlyLetterSp:" ֻ����Ӣ����ĸ��Сд ",onlyLetterAccentSp:"ֻ����Ӣ����ĸ��Сд",onlyLetterNumber:"�����������ַ�",ajaxUserCall_1:"�������ѱ�������ʹ�� ",ajaxUserCall_2:"����ȷ�������Ƿ���������ʹ�ã����Եȡ�",ajaxUserCallPhp_1:"���ʺ����ƿ���ʹ��",ajaxUserCallPhp_2:"�������ѱ�������ʹ��",ajaxUserCallPhp_3:"����ȷ���ʺ������Ƿ���������ʹ�ã����Եȡ�",ajaxNameCall_1:"�����ƿ���ʹ��",ajaxNameCall_2:"�������ѱ�������ʹ��",ajaxNameCall_3:"����ȷ�������Ƿ���������ʹ�ã����Եȡ� ",ajaxNameCallPhp_1:"�������ѱ�������ʹ�� ",ajaxNameCallPhp_2:" ����ȷ�������Ƿ���������ʹ�ã����Եȡ� ",validate2fields:"������ HELLO",dateFormat:"��Ч�����ڸ�ʽ ",dateTimeFormat_1:"��Ч�����ڻ�ʱ���ʽ",dateTimeFormat_2:"�ɽ��ܵĸ�ʽ��",dateTimeFormat_3:"mm/dd/yyyy hh:mm:ss AM|PM �� ",dateTimeFormat_4:"yyyy-mm-dd hh:mm:ss AM|PM"}
/* "/static/js/module.js" */
var userAgent=navigator.userAgent.toLowerCase();var is_opera=userAgent.indexOf('opera')!=-1&&opera.version();var is_moz=(navigator.product=='Gecko')&&userAgent.substr(userAgent.indexOf('firefox')+8,3);var ua_match=/(trident)(?:.*rv:([\w.]+))?/.exec(userAgent)||/(msie) ([\w.]+)/.exec(userAgent);var is_ie=ua_match&&(ua_match[1]=='trident'||ua_match[1]=='msie')?true:false;function LoadDialogWindow(URL,parent,loc_x,loc_y,width,height)
{if(is_ie)
window.showModalDialog(URL,parent,"edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:"+width+"px;dialogHeight:"+height+"px;dialogTop:"+loc_y+"px;dialogLeft:"+loc_x+"px",true);else
window.open(URL,parent,"height="+height+",width="+width+",status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,top="+loc_y+",left="+loc_x+",resizable=yes,modal=yes,dependent=yes,dialog=yes,minimizable=no",true);}
function SelectUser(FUNC_ID,MODULE_ID,TO_ID,TO_NAME,MANAGE_FLAG,FORM_NAME,USE_UID)
{var w=453,h=350;URL="/module/user_select/?FUNC_ID="+FUNC_ID+"&MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&MANAGE_FLAG="+MANAGE_FLAG+"&FORM_NAME="+FORM_NAME+"&USE_UID="+USE_UID;var loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}else{var tleft=event.screenX;var ttop=event.screenY;if(tleft>w)
tleft=tleft-w-30;loc_x=tleft;loc_y=ttop+15;}
LoadDialogWindow(URL,self,loc_x,loc_y,w,h);}
function ClearUser(TO_ID,TO_NAME)
{if(TO_ID==""||TO_ID=="undefined"||TO_ID==null)
{TO_ID="TO_ID";TO_NAME="TO_NAME";}
document.getElementsByName(TO_ID)[0].value="";document.getElementsByName(TO_NAME)[0].value="";}
function SelectPrcs(MODULE_ID,TO_ID,TO_NAME,MANAGE_FLAG,FORM_NAME)
{URL="/module/flow_prcs_select/?MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&MANAGE_FLAG="+MANAGE_FLAG+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-400;loc_y=document.body.scrollTop+event.clientY+170;}
window.open(URL,"flow_prcs_select","height=350,width=400,status=0,toolbar=no,menubar=no,location=no,scrollbars=no,top="+loc_y+",left="+loc_x+",resizable=yes");}
function ClearPrcs(TO_ID,TO_NAME)
{if(TO_ID==""||TO_ID=="undefined"||TO_ID==null)
{TO_ID="TO_ID";TO_NAME="TO_NAME";}
document.getElementsByName(TO_ID)[0].value="";document.getElementsByName(TO_NAME)[0].value="";}
function SelectUserSingle(FUNC_ID,MODULE_ID,TO_ID,TO_NAME,MANAGE_FLAG,FORM_NAME,USE_UID,OUT_FLAG,NOTLOGIN_FLAG)
{URL="/module/user_select_single/?FUNC_ID="+FUNC_ID+"&MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&MANAGE_FLAG="+MANAGE_FLAG+"&FORM_NAME="+FORM_NAME+"&USE_UID="+USE_UID+"&OUT_FLAG="+OUT_FLAG;if(NOTLOGIN_FLAG)
{URL+='&NOTLOGIN_FLAG='+NOTLOGIN_FLAG;}
loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,450,350);}
function SelectDept(MODULE_ID,TO_ID,TO_NAME,PRIV_OP,FORM_NAME)
{URL="/module/dept_select/?MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&PRIV_OP="+PRIV_OP+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,400,350);}
function SelectDeptSingle(MODULE_ID,TO_ID,TO_NAME,PRIV_OP,FORM_NAME)
{URL="/module/dept_select_single/?MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&PRIV_OP="+PRIV_OP+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,200,350);}
function SelectPriv(MODULE_ID,TO_ID,TO_NAME,PRIV_OP,FORM_NAME)
{URL="/module/priv_select/?MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&PRIV_OP="+PRIV_OP+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,250,350);}
function SelectMytable(TO_ID,TO_NAME,POS)
{URL="/module/mytable/?TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&POS="+POS;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,500,350);}
function SelectPortal(TO_ID,TO_NAME)
{URL="/module/portal/?TO_ID="+TO_ID+"&TO_NAME="+TO_NAME;loc_x=500;loc_y=100;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX+250;loc_y=document.body.scrollTop+event.clientY+80;}
LoadDialogWindow(URL,self,loc_x,loc_y,100,350);}
function SelectShortcut(TO_ID,TO_NAME)
{URL="/module/shortcut/?TO_ID="+TO_ID+"&TO_NAME="+TO_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,500,350);}
function td_calendar(fieldname)
{var URL="/inc/calendar.php?FIELDNAME="+fieldname;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-event.offsetX-80;loc_y=document.body.scrollTop+event.clientY-event.offsetY+140;}
LoadDialogWindow(URL,self,loc_x,loc_y,300,230);}
function td_clock(fieldname)
{var URL="/inc/clock.php?FIELDNAME="+fieldname;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-event.offsetX-80;loc_y=document.body.scrollTop+event.clientY-event.offsetY+140;}
LoadDialogWindow(URL,self,loc_x,loc_y,280,120);}
function SelectAddr(FIELD,TO_ID,FORM_NAME)
{URL="/module/addr_select/?FIELD="+FIELD+"&TO_ID="+TO_ID+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-event.offsetX-100;loc_y=document.body.scrollTop+event.clientY-event.offsetY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,600,350);}
function ClearAddr(TO_ID)
{if(TO_ID==""||TO_ID=="undefined"||TO_ID==null)
return;document.getElementsByName(TO_ID)[0].value="";}
function AddFav(FAV_DESC,FAV_URL,OPEN_WINDOW)
{URL="/module/fav/?URL_DESC="+encodeURIComponent(FAV_DESC)+"&URL="+encodeURIComponent(FAV_URL)+"&OPEN_WINDOW="+OPEN_WINDOW;loc_y=loc_x=200;if(is_ie)
{loc_x=(window.screen.availWidth-400)/2;loc_y=(window.screen.availHeight-130)/2-100;}
window.open(URL,"fav","height=220,width=600,status=0,toolbar=no,menubar=no,location=no,scrollbars=no,top="+loc_y+",left="+loc_x+",resizable=yes");}
function LoadForeColorTable(ClickFunc)
{var tColor="";var tRowNum=8;var tColorAry=new Array();tColorAry[0]="#000000";tColorAry[1]="#993300";tColorAry[2]="#333300";tColorAry[3]="#003300";tColorAry[4]="#003366";tColorAry[5]="#000080";tColorAry[6]="#333399";tColorAry[7]="#333333";tColorAry[8]="#800000";tColorAry[9]="#FF6600";tColorAry[10]="#808000";tColorAry[11]="#008000";tColorAry[12]="#008080";tColorAry[13]="#0000FF";tColorAry[14]="#666699";tColorAry[15]="#808080";tColorAry[16]="#0066CC";tColorAry[17]="#FF9900";tColorAry[18]="#99CC00";tColorAry[19]="#339966";tColorAry[20]="#33CCCC";tColorAry[21]="#3366FF";tColorAry[22]="#800080";tColorAry[23]="#999999";tColorAry[24]="#FF00FF";tColorAry[25]="#FFCC00";tColorAry[26]="#FFFF00";tColorAry[27]="#00FF00";tColorAry[28]="#00FFFF";tColorAry[29]="#00CCFF";tColorAry[30]="#993366";tColorAry[31]="#CCCCCC";tColorAry[32]="#FF99CC";tColorAry[33]="#FFCC99";tColorAry[34]="#FFFF99";tColorAry[35]="#CCFFCC";tColorAry[36]="#CCFFFF";tColorAry[37]="#99CCFF";tColorAry[38]="#CC99FF";tColorAry[39]="#FFFFFF";var tColorTableHTML='<table cellpadding="0" cellspacing="0" class="ColorTable">';tColorTableHTML+='  <tr>';for(var ti=0;ti<tColorAry.length;ti++)
{tColorTableHTML+='    <td onmouseover="this.className=\'Selected\';" onmouseout="this.className=\'\';" onclick="'+ClickFunc+'(\''+tColorAry[ti]+'\');"';if(tColor.toUpperCase()==tColorAry[ti])
tColorTableHTML+=' class="Selected"';tColorTableHTML+='><div style="width:11px;height:11px;background-color:'+tColorAry[ti]+';"></div></td>';if((ti+1)%tRowNum==0&&ti+1!=tColorAry.length)
{tColorTableHTML+='  </tr>';tColorTableHTML+='  <tr>';};};tColorTableHTML+='  </tr>';tColorTableHTML+='</table>';return tColorTableHTML;}
function LoadForeColorTable_notify(ClickFunc)
{var tColor="";var tRowNum=6;var tColorAry=new Array();tColorAry[0]="#000000";tColorAry[1]="#78b800";tColorAry[2]="#0159df";tColorAry[3]="#630098";tColorAry[4]="#e5ad00";tColorAry[5]="#f00001";var tColorTableHTML='<table cellpadding="0" cellspacing="0" class="ColorTable">';tColorTableHTML+='  <tr>';for(var ti=0;ti<tColorAry.length;ti++)
{tColorTableHTML+='    <td onmouseover="this.className=\'Selected\';" onmouseout="this.className=\'\';" onclick="'+ClickFunc+'(\''+tColorAry[ti]+'\');"';if(tColor.toUpperCase()==tColorAry[ti])
tColorTableHTML+=' class="Selected"';tColorTableHTML+='><div style="width:15px;height:19px;background-color:'+tColorAry[ti]+';"></div></td>';if((ti+1)%tRowNum==0&&ti+1!=tColorAry.length)
{tColorTableHTML+='  </tr>';tColorTableHTML+='  <tr>';};};tColorTableHTML+='  </tr>';tColorTableHTML+='</table>';return tColorTableHTML;}
function SelectUserExternal(MODULE_ID,TO_ID,TO_NAME,MANAGE_FLAG,FORM_NAME)
{URL="/module/user_external_select/?MODULE_ID="+MODULE_ID+"&TO_ID="+TO_ID+"&TO_NAME="+TO_NAME+"&MANAGE_FLAG="+MANAGE_FLAG+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX+60;loc_y=document.body.scrollTop+event.clientY+170;}
LoadDialogWindow(URL,self,loc_x,loc_y,220,350);}
function SelectTable(TO_ID,DB_NAME,FORM_NAME)
{URL="/module/table_select/?TO_ID="+TO_ID+"&DB_NAME="+DB_NAME+"&FORM_NAME="+FORM_NAME;loc_y=loc_x=200;if(is_ie)
{loc_x=document.body.scrollLeft+event.clientX-100;loc_y=document.body.scrollTop+event.clientY;}
LoadDialogWindow(URL,self,loc_x,loc_y,600,450);}
function ClearTable(TO_ID)
{if(TO_ID==""||TO_ID=="undefined"||TO_ID==null)
{TO_ID="TABLES";}
document.getElementsByName(TO_ID)[0].value="";}
/* "/static/js/utility.js" */
var $=function(id){return document.getElementById(id);};var userAgent=navigator.userAgent.toLowerCase();var isSafari=userAgent.indexOf("Safari")>=0;var is_opera=userAgent.indexOf('opera')!=-1&&opera.version();var is_moz=(navigator.product=='Gecko')&&userAgent.substr(userAgent.indexOf('firefox')+8,3);var ua_match=/(trident)(?:.*rv:([\w.]+))?/.exec(userAgent)||/(msie) ([\w.]+)/.exec(userAgent);var is_ie=ua_match&&(ua_match[1]=='trident'||ua_match[1]=='msie')?true:false;var allElements=document.getElementsByTagName("*");String.prototype.trim=function()
{return this.replace(/(^[\s\t��]+)|([��\s\t]+$)/g,"");};function strlen(str)
{return str.replace(/[^\x00-\xff]/g,'xx').length;}
function getOpenner()
{if(parent.dialogArguments)
return parent.dialogArguments.document;else
return parent.opener.document;}
function isUndefined(variable){return typeof variable=='undefined'?true:false;}
function URLSpecialChars(str)
{var re=/%/g;str=str.replace(re,"%25");re=/\+/g;str=str.replace(re,"%2B");re=/\//g;str=str.replace(re,"%2F");re=/\?/g;str=str.replace(re,"%3F");re=/#/g;str=str.replace(re,"%23");re=/&/g;str=str.replace(re,"%26");return str;}
function fetchOffset(obj){var left_offset=obj.offsetLeft;var top_offset=obj.offsetTop;while((obj=obj.offsetParent)!=null){left_offset+=obj.offsetLeft;top_offset+=obj.offsetTop;}
return{'left':left_offset,'top':top_offset};}
function new_dom()
{var DomType=new Array("microsoft.xmldom","msxml.domdocument","msxml2.domdocument","msxml2.domdocument.3.0","msxml2.domdocument.4.0","msxml2.domdocument.5.0");for(var i=0;i<DomType.length;i++)
{try{var a=new ActiveXObject(DomType[i]);if(!a)continue;return a;}
catch(ex){}}
return null;}
function new_req(){if(window.XMLHttpRequest)return new XMLHttpRequest;else if(window.ActiveXObject){var req;try{req=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){try{req=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){return null;}}
return req;}else return null;}
function _get(url,args,fn,sync)
{sync=isUndefined(sync)?true:sync;var req=new_req();if(args!="")args="?"+args;try{req.open("GET",url+args,sync);}
catch(ex){alert(ex.description);return;}
if(false==isUndefined(fn))
req.onreadystatechange=function(){if(req.readyState==4)fn(req);};req.send('');}
function _post(url,args,fn,sync)
{sync=isUndefined(sync)?true:sync;var req=new_req();try{req.open('POST',url,sync);}
catch(ex){alert(ex.description);return;}
req.setRequestHeader("Method","POST "+url+" HTTP/1.1");req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");req.onreadystatechange=function(){if(req.readyState==4){var s;try{s=req.status;}catch(ex){alert(ex.description);}
if(s==200)fn(req);}}
req.send(args);}
function getCookie(name)
{var arr=document.cookie.split("; ");for(i=0;i<arr.length;i++)
if(arr[i].split("=")[0]==name)
return unescape(arr[i].split("=")[1]);return null;}
function setCookie(name,value,paras){var today=new Date();var expires=new Date();expires.setTime(today.getTime()+1000*60*60*24*2000);var path=null;if(typeof(paras)=="object")
{if(typeof(paras.expires)!="undefined")
expires=paras.expires;if(typeof(paras.path)!="undefined")
path=paras.path;}
document.cookie=name+"="+escape(value)+"; expires="+expires.toGMTString()+(path?'; path='+path:'');}
function is_offline(uid){var bOffline=true;var req=new_req();req.open("GET","/inc/is_offline.php",false);req.onreadystatechange=function(){if(req.readyState==4&&req.status==200&&req.responseText==uid)
bOffline=false;};req.send(null);return bOffline;}
function print_r(theObj){if(theObj.constructor==Array||theObj.constructor==Object)
{document.write("<ul>")
for(var p in theObj){if(theObj[p].constructor==Array||theObj[p].constructor==Object)
{document.write("<li>["+p+"] => "+typeof(theObj)+"</li>");document.write("<ul>")
print_r(theObj[p]);document.write("</ul>")}
else
{document.write("<li>["+p+"] => "+theObj[p]+"</li>");}}
document.write("</ul>")}}
function close_window()
{if(typeof(window.external)=='undefined'||typeof(window.external.OA_SMS)=='undefined'||!window.external.OA_SMS("","","GET_VERSION")||window.external.OA_SMS("","","GET_VERSION")<'20110223')
{window.open('','_self','');window.close();}
else
{window.external.OA_SMS("","","CLOSE_WINDOW")}}
function isTouchDevice(){try{document.createEvent("TouchEvent");return userAgent.indexOf("mobile")>=0||userAgent.indexOf("maxthon")<0;}catch(e){return false;}}
function CancelBuble(event)
{if(window.ActiveXObject)
{event.cancelBubble=true;}
else
{event.stopPropagation();}}
function TJF_window_close()
{var triggerClick=function(el){if(el.click){el.click();}else{try{var evt=document.createEvent('Event');evt.initEvent('click',true,true);el.dispatchEvent(evt);}catch(e){};}};if(top.document.getElementById("tabs_container"))
{var tabs=top.document.getElementById("tabs_container");var oDivs=tabs.getElementsByTagName("DIV");for(var i=0;i<oDivs.length;i++)
{if(oDivs[i].className=="selected")
{var aObj=oDivs[i].getElementsByTagName("A");for(var j=0;j<aObj.length;j++){if(aObj[j].className=="close")
{triggerClick(aObj[j]);return;}}}}}
if(top.document.getElementById("navMenu")){var pmain=top.document.getElementById("nav_main");var pmenu=top.document.getElementById("navMenu");}
if(!pmenu||!pmain)
{if(top.frames["shortcut"])
{var shortcut=top.frames["shortcut"].document.getElementById("Nav_div");if(shortcut&&(typeof window.external=="undefined"||typeof window.external.OA_SMS=="undefined")){top.open('','_self','');top.close();}}
if(typeof window.external!="undefined"&&typeof(window.external.OA_SMS)!="undefined"){window.external.OA_SMS("","","CLOSE_WINDOW");return;}
window.close();return;}
var indexUrl=pmain.getAttribute("index");indexUrl=indexUrl.replace("/general/..","");for(var i=0;i<pmenu.childNodes.length;i++)
{if(pmenu.childNodes[i].tagName!="A")
continue;var phref=pmenu.childNodes[i].href;if(pmenu.childNodes[i].href&&phref.indexOf(indexUrl)!=-1)
{var spanObj=pmenu.childNodes[i].getElementsByTagName("SPAN");for(var j=0;j<spanObj.length;j++)
{if(spanObj[j].nodeName=="#text")
continue;if(spanObj[j].className=="close")
{triggerClick(spanObj[j]);}}}}}
function sprintf()
{var arg=arguments,str=arg[0]||'',i,n;for(i=1,n=arg.length;i<n;i++){str=str.replace(/%s/,arg[i]);}
return str;}
if(typeof(LoadScript)!="function")
{function LoadScript(url)
{url=url.toLowerCase();var scripts=document.getElementsByTagName('script');for(var i=0;i<scripts.length;i++)
{var src=scripts[i].getAttribute('src');if(src)
{src=src.toLowerCase();if(src==url||src+".gz"==url||src==url+".gz")
return;}}
document.write('<scr'+'ipt type="text/javascript" src="'+url+'"><\/scr'+'ipt>');}}
if(typeof(LoadCss)!="function")
{function LoadCss(url)
{url=url.toLowerCase();var links=document.getElementsByTagName('link');for(var i=0;i<links.length;i++)
{var href=links[i].getAttribute('href');if(href)
{href=href.toLowerCase();if(href==url||href+".gz"==url||href==url+".gz")
return;}}
document.write('<link href="'+url+'" type="text/css" rel="stylesheet" />');}}
function in_array(needle,haystack)
{var length=haystack.length;for(var i=0;i<length;i++){if(haystack[i]==needle)
return true;}
return false;}
LoadScript('/static/js/ispirit.js');
/* "/static/js/attach.js" */
var $$=function(id){return document.getElementById(id);};var userAgent=navigator.userAgent.toLowerCase();var is_opera=userAgent.indexOf('opera')!=-1&&opera.version();var is_moz=(navigator.product=='Gecko')&&userAgent.substr(userAgent.indexOf('firefox')+8,3);var ua_match=/(trident)(?:.*rv:([\w.]+))?/.exec(userAgent)||/(msie) ([\w.]+)/.exec(userAgent);var is_ie=ua_match&&(ua_match[1]=='trident'||ua_match[1]=='msie')?true:false;var imageType="gif,jpg,jpeg,png,bmp,iff,jp2,jpx,jb2,jpc,xbm,wbmp";function isUndefined(variable){return typeof variable=='undefined'?true:false;}
if(!+'\v1'){(function(f){window.setTimeout=f(window.setTimeout);window.setInterval=f(window.setInterval);})(function(f){return function(c,t){if(typeof(c)=="string")
return eval(c);var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});}
var jsmenu=new Array();var ctrlobjclassName;jsmenu['active']=new Array();jsmenu['timer']=new Array();jsmenu['iframe']=new Array();function initCtrl(ctrlobj,click,duration,timeout,layer){if(ctrlobj&&!ctrlobj.initialized){ctrlobj.initialized=true;ctrlobj.unselectable=true;ctrlobj.outfunc=typeof ctrlobj.onmouseout=='function'?ctrlobj.onmouseout:null;ctrlobj.onmouseout=function(){if(this.outfunc)this.outfunc();if(duration<3)jsmenu['timer'][ctrlobj.id]=setTimeout(hideMenu,timeout,layer);}
ctrlobj.overfunc=typeof ctrlobj.onmouseover=='function'?ctrlobj.onmouseover:null;ctrlobj.onmouseover=function(e){doane(e);if(this.overfunc)this.overfunc();if(click){clearTimeout(jsmenu['timer'][this.id]);}else{for(var id in jsmenu['timer']){if(jsmenu['timer'][id])clearTimeout(jsmenu['timer'][id]);}}}}}
function initMenu(ctrlid,menuobj,duration,timeout,layer,drag){if(menuobj&&!menuobj.initialized){menuobj.initialized=true;menuobj.ctrlkey=ctrlid;menuobj.onclick=ebygum;menuobj.style.position='absolute';if(duration<3){if(duration>1){menuobj.onmouseover=function(){clearTimeout(jsmenu['timer'][ctrlid]);}}
if(duration!=1){menuobj.onmouseout=function(){jsmenu['timer'][ctrlid]=setTimeout(hideMenu,timeout,layer);}}}
menuobj.style.zIndex=50;if(is_ie){}
if(drag){menuobj.onmousedown=function(event){try{menudrag(menuobj,event,1);}catch(e){}};menuobj.onmousemove=function(event){try{menudrag(menuobj,event,2);}catch(e){}};menuobj.onmouseup=function(event){try{menudrag(menuobj,event,3);}catch(e){}};}}}
var menudragstart=new Array();function menudrag(menuobj,e,op){if(op==1){if(in_array(is_ie?event.srcElement.tagName:e.target.tagName,['TEXTAREA','INPUT','BUTTON','SELECT'])){return;}
menudragstart=is_ie?[event.clientX,event.clientY]:[e.clientX,e.clientY];menudragstart[2]=parseInt(menuobj.style.left);menudragstart[3]=parseInt(menuobj.style.top);doane(e);}else if(op==2&&menudragstart[0]){var menudragnow=is_ie?[event.clientX,event.clientY]:[e.clientX,e.clientY];menuobj.style.left=(menudragstart[2]+menudragnow[0]-menudragstart[0])+'px';menuobj.style.top=(menudragstart[3]+menudragnow[1]-menudragstart[1])+'px';doane(e);}else if(op==3){menudragstart=[];doane(e);}}
function showMenu(ctrlid,align,click,offset,duration,timeout,layer,showid,maxh,drag){var ctrlobj=$$(ctrlid);if(!ctrlobj)return;if(isUndefined(align))align=0;if(isUndefined(click))click=false;if(isUndefined(offset))offset=0;if(isUndefined(duration))duration=2;if(isUndefined(timeout))timeout=200;if(isUndefined(layer))layer=0;if(isUndefined(showid))showid=ctrlid;var showobj=$$(showid);var menuobj=$$(showid+'_menu');if(!showobj||!menuobj)return;if(isUndefined(maxh))maxh=400;if(isUndefined(drag))drag=false;if(click&&jsmenu['active'][layer]==menuobj){hideMenu(layer);return;}else{hideMenu(layer);}
var len=jsmenu['timer'].length;if(len>0){for(var i=0;i<len;i++){if(jsmenu['timer'][i])clearTimeout(jsmenu['timer'][i]);}}
initCtrl(ctrlobj,click,duration,timeout,layer);ctrlobjclassName=ctrlobj.className;ctrlobj.className+=' hover';ctrlobj.style.backgroundColor="#E5F3FE";initMenu(ctrlid,menuobj,duration,timeout,layer,drag);menuobj.style.display='block';if(!is_opera){menuobj.style.clip='rect(auto, auto, auto, auto)';}
setMenuPosition(showid,align,offset);if(is_ie&&userAgent.match(/msie 6/ig)){if(!jsmenu['iframe'][layer]){var iframe=document.createElement('iframe');iframe.style.display='none';iframe.style.position='absolute';iframe.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';$$('append_parent')?$$('append_parent').appendChild(iframe):menuobj.parentNode.appendChild(iframe);jsmenu['iframe'][layer]=iframe;}
jsmenu['iframe'][layer].style.top=menuobj.style.top;jsmenu['iframe'][layer].style.left=menuobj.style.left;jsmenu['iframe'][layer].style.width=menuobj.w;jsmenu['iframe'][layer].style.height=menuobj.h;jsmenu['iframe'][layer].style.display='block';}
if(maxh&&menuobj.scrollHeight>maxh){menuobj.style.height=maxh+'px';if(is_opera){menuobj.style.overflow='auto';}else{menuobj.style.overflowY='auto';}}
if(!duration){setTimeout(hideMenu,timeout,layer);}
jsmenu['active'][layer]=menuobj;}
function setMenuPosition(showid,align,offset){var showobj=$$(showid);var menuobj=$$(showid+'_menu');if(isUndefined(align))align=0;if(isUndefined(offset))offset=0;if(showobj){if(align==0)
{mousePos=getMousePos();offsetPos=fetchOffset(showobj);showobj.pos={left:mousePos.left,top:offsetPos.top};showobj.X=showobj.pos['left']-20;showobj.Y=showobj.pos['top']+showobj.scrollHeight-3;}
else
{showobj.pos=fetchOffset(showobj);showobj.X=showobj.pos['left'];showobj.Y=showobj.pos['top']+showobj.scrollHeight-3;}
var menu_offset=getMenuOffset(showobj.id);showobj.w=showobj.offsetWidth;showobj.h=showobj.offsetHeight;menuobj.w=menuobj.offsetWidth;menuobj.h=menuobj.offsetHeight;if(offset<3){menuobj.style.left=((showobj.X+menuobj.w>document.body.clientWidth)&&(showobj.X+showobj.w-menuobj.w>=0)?showobj.X+showobj.w-menuobj.w:showobj.X)-menu_offset['left']+'px';if(offset==1)
menuobj.style.top=showobj.Y-menu_offset['top']+'px';else if(offset==2)
menuobj.style.top=(showobj.Y-menuobj.h-menu_offset['top'])+'px';else
{menuobj.style.top=showobj.Y-menu_offset['top']+'px';var bb=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;if(parseInt(menuobj.style.top)+menuobj.h>bb.clientHeight+bb.scrollTop)
menuobj.style.top=showobj.Y-menuobj.h+'px';}}else if(offset==3){menuobj.style.left=(document.body.clientWidth-menuobj.clientWidth)/ 2+document.body.scrollLeft-menu_offset['left']+'px';menuobj.style.top=(document.body.clientHeight-menuobj.clientHeight)/ 2+document.body.scrollTop-menu_offset['top']+'px';}
if(menuobj.style.clip&&!is_opera){menuobj.style.clip='rect(auto, auto, auto, auto)';}}}
function hideMenu(layer){if(isUndefined(layer))layer=0;if(jsmenu['active'][layer]){try{$$(jsmenu['active'][layer].ctrlkey).className=ctrlobjclassName;$$(jsmenu['active'][layer].ctrlkey).style.backgroundColor="transparent";}catch(e){}
clearTimeout(jsmenu['timer'][jsmenu['active'][layer].ctrlkey]);jsmenu['active'][layer].style.display='none';if(is_ie&&userAgent.match(/msie 6/ig)&&jsmenu['iframe'][layer]){jsmenu['iframe'][layer].style.display='none';}
jsmenu['active'][layer]=null;}}
function fetchOffset(obj){var left_offset=obj.offsetLeft;var top_offset=obj.offsetTop;while((obj=obj.offsetParent)!=null){var position=obj.currentStyle?obj.currentStyle.position:document.defaultView.getComputedStyle(obj,null).getPropertyValue('position');if(position=="relative")
break;left_offset+=obj.offsetLeft;top_offset+=obj.offsetTop;}
return{'left':left_offset,'top':top_offset};}
function ebygum(eventobj){if(!eventobj||is_ie){window.event.cancelBubble=true;return window.event;}else{if(eventobj.target.type=='submit'){eventobj.target.form.submit();}
eventobj.stopPropagation();return eventobj;}}
function doane(event){e=event?event:window.event;if(is_ie){e.returnValue=false;e.cancelBubble=true;}else if(e){e.stopPropagation();e.preventDefault();}}
function in_array(needle,haystack){if(typeof needle=='string'||typeof needle=='number'){for(var i in haystack){if(haystack[i]==needle){return true;}}}
return false;}
function getEvent()
{if(document.all)return window.event;func=getEvent.caller;while(func!=null){var arg0=func.arguments[0];if(arg0)
{if((arg0.constructor==Event||arg0.constructor==MouseEvent)||(typeof(arg0)=="object"&&arg0.preventDefault&&arg0.stopPropagation))
{return arg0;}}
func=func.caller;}
return null;}
function getEventSrc()
{var event=getEvent();return event.srcElement?event.srcElement:event.target;}
function getMousePos()
{var mouseX=0;var mouseY=0;var e=getEvent();var bb=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;mouseX=e.clientX+bb.scrollLeft;mouseY=e.clientY+bb.scrollTop;return{left:mouseX,top:mouseY};}
function getMenuOffset(id)
{var dialogLeft=dialogTop=0;var el=document.getElementById(id);while(el)
{el=el.parentElement?el.parentElement:el.parentNode;if(el&&el.className=="ModalDialog")
{dialogLeft=parseInt(el.style.left);dialogTop=parseInt(el.style.top);break;}}
return{left:dialogLeft,top:dialogTop};}
function show_attach_op(id,a)
{var pos=fetchOffset(a);var el=document.getElementById(id);el.style.display="block";el.style.width=a.offsetWidth;el.style.left=pos['left'];el.style.top=pos['top']+a.offsetHeight-3;el.style.filter="progid:DXImageTransform.Microsoft.shadow(direction=135,color=#CCCCCC,strength=4)";var bb=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;if(parseInt(el.style.top)+el.offsetHeight>bb.offsetHeight+bb.scrollTop)
el.style.top=pos['top']-el.offsetHeight+5;}
function hide_attach_op(id)
{var el=document.getElementById(id);el.style.display="none";}
function SaveFile(ATTACHMENT_ID,ATTACHMENT_NAME)
{URL="/module/save_file/?ATTACHMENT_ID="+ATTACHMENT_ID+"&ATTACHMENT_NAME="+ATTACHMENT_NAME+"&A=1";loc_x=screen.availWidth/2-200;loc_y=screen.availHeight/2-90;window.open(URL,null,"height=180,width=400,status=1,toolbar=no,menubar=no,location=no,scrollbars=yes,top="+loc_y+",left="+loc_x+",resizable=yes");}
function sel_attach(div_id,dir_field,name_field,disk_id,filter)
{if(!filter)
filter="";var URL="/module/sel_file/?EXT_FILTER="+filter+"&MULTI_SELECT=1&DIV_ID="+div_id+"&DIR_FIELD="+dir_field+"&NAME_FIELD="+name_field+"&TYPE_FIELD="+disk_id;window.open(URL,null,"height=300,width=500,status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,top=200,left=300,resizable=yes");}
function upload_limit_check(file_name)
{if(upload_limit==0||file_name=="")
return true;file_name=file_name.substring(file_name.lastIndexOf("\\")+1).toLowerCase();var ext_name="";if(file_name.lastIndexOf(".")>=0)
ext_name=file_name.substring(file_name.lastIndexOf(".")+1,file_name.length);if(ext_name==""||ext_name==file_name)
ext_name="*";var bFound=limit_type.indexOf(ext_name+",")==0||limit_type.indexOf(","+ext_name+",")>0;if(upload_limit==1&&!bFound||upload_limit==2&&bFound)
return true;if(ext_name=="*")
alert(td_lang.inc.msg_1);else
{var msg1=sprintf(td_lang.inc.msg_106,ext_name);alert(msg1);}
return false;}
function upload_image_check(file_name)
{if(file_name=="")
{alert(td_lang.inc.msg_2);return false;}
file_name=file_name.substring(file_name.lastIndexOf("\\")+1).toLowerCase();var ext_name="";if(file_name.lastIndexOf(".")>=0)
ext_name=file_name.substring(file_name.lastIndexOf(".")+1,file_name.length);if(ext_name==""||ext_name==file_name)
{alert(td_lang.inc.msg_2);return false;}
var file_types="gif,jpg,jpeg,png,bmp,";if(file_types.indexOf(ext_name+",")<0&&file_types.indexOf(","+ext_name+",")<=0)
{alert(td_lang.inc.msg_2);return false;}
return true;}
function GetParentEl(el,tagName)
{el=el.parentElement?el.parentElement:el.parentNode;if(!el)
return null;if(el.tagName.toLowerCase()==tagName)
return el;else
return GetParentEl(el,tagName);}
function CreateFileEl(id,onchange)
{if(isUndefined(onchange))
onchange=AddFile;var attach=document.createElement("input");attach.type="file";attach.className="addfile";attach.name=id;attach.id=id;attach.size="1";attach.hideFocus="true";attach.onchange=onchange;return attach;}
function AddFile(file_type,divname)
{var file=getEventSrc();var prefix=file.id.substring(0,file.id.lastIndexOf("_"));if(!prefix)
{prefix="ATTACHMENT";}
if(divname)
{var attach_div=document.getElementById(divname+"_div");}
else
{var attach_div=document.getElementById(prefix+"_div");}
var form_el=GetParentEl(file,"form");var addFileLink=GetParentEl(file,"a");if(!attach_div||!form_el||!addFileLink)
{alert(td_lang.inc.msg_3);return;}
if(!upload_limit_check(file.value)||file_type=="image"&&!upload_image_check(file.value))
{var attach=CreateFileEl(file.id,file.onchange);addFileLink.removeChild(file);addFileLink.appendChild(attach);return;}
var id=parseInt(file.id.substring(prefix.length+1));var el=form_el.children?form_el.children:form_el.childNodes;for(var i=0;i<el.length;i++)
{if(el[i].tagName&&el[i].tagName.toLowerCase()=="input"&&el[i].type.toLowerCase()=="file"&&el[i].id!=file.id&&el[i].value==file.value)
{alert(td_lang.inc.msg_4);addFileLink.removeChild(file);var attach=CreateFileEl(file.id,file.onchange);addFileLink.appendChild(attach);return;}}
var attach_name=file.value.substring(file.value.lastIndexOf("\\")+1);attach_div.innerHTML+="<span id='"+prefix+"_span_"+id+"' title='"+file.value+"'><img src='/static/images/attach.png' align='absMiddle'>"+attach_name+"<img src='/static/images/remove.png' onclick='RemoveFile(this)' align='absMiddle' style='cursor:hand;'>;&nbsp;</span><br/>";file.style.zIndex="-1";form_el.appendChild(file);id++;var attach=CreateFileEl(prefix+'_'+id,file.onchange);addFileLink.appendChild(attach);document.getElementById(prefix+"_upload_div").style.display="";if(file_type=="image")
{InsertImage("file://"+file.value.replace(/\\/g,"/"));}}
function AddFileH5(file,fileInput)
{var isImage=!!file.type.match(/image/),prefix=fileInput.id.substring(0,fileInput.id.lastIndexOf("_"));if(!prefix)
prefix="ATTACHMENT";console.log(arguments);var attach_div=document.getElementById(prefix+"_div");var form_el=GetParentEl(fileInput,"form");var addFileLink=GetParentEl(fileInput,"a");if(!attach_div||!form_el||!addFileLink)
{return false;}
if(!upload_limit_check(file.name)||isImage&&!upload_image_check(file.name))
{var attach=CreateFileEl(fileInput.id,fileInput.onchange);addFileLink.removeChild(fileInput);addFileLink.appendChild(attach);return true;}
var id=parseInt(fileInput.id.substring(prefix.length+1));var el=form_el.children?form_el.children:form_el.childNodes;for(var i=0;i<el.length;i++)
{if(el[i].tagName&&el[i].tagName.toLowerCase()=="input"&&el[i].type.toLowerCase()=="file"&&el[i].id!=fileInput.id&&el[i].value==file.name)
{return;}}
fileInput.files[0]=file;console.log(fileInput.files[0]);var attach_name=file.name;attach_div.innerHTML+="<span id='"+prefix+"_span_"+id+"' title='"+attach_name+"'><img src='/static/images/attach.png' align='absMiddle'>"+attach_name+"<img src='/static/images/remove.png' onclick='RemoveFile(this)' align='absMiddle' style='cursor:hand;'>;&nbsp;</span>";fileInput.style.zIndex="-1";form_el.appendChild(fileInput);id++;var attach=CreateFileEl(prefix+'_'+id,file.onchange);addFileLink.appendChild(attach);document.getElementById(prefix+"_upload_div").style.display="";if(isImage)
{InsertImage("file://"+file.value.replace(/\\/g,"/"));}
return true;}
function RemoveFile(img)
{var span=GetParentEl(img,"span");var file=document.getElementById(span.id.replace("_span_","_"));if(span&&span.parentElement)
span.parentElement.removeChild(span);if(file&&file.parentElement)
file.parentElement.removeChild(file);}
function ShowAddFile(postfix,show_sel_attach)
{if(isUndefined(postfix))
{postfix="";}
document.write('<span id="ATTACHMENT'+postfix+'_div"></span><span id="ATTACHMENT'+postfix+'_upload_div" style="display:none;"></span><div id="SelFileDiv'+postfix+'"></div><a class="addfile" href="javascript:;">'+td_lang.inc.msg_5+'<input class="addfile" type="file" name="ATTACHMENT'+postfix+'_0" id="ATTACHMENT'+postfix+'_0" size="1" hideFocus="true" onchange="AddFile();" /></a>');if(show_sel_attach!='0')
{document.write('<a href="javascript:void(0);" onclick="sel_attach(\'SelFileDiv'+postfix+'\',\'ATTACH_DIR'+postfix+'\',\'ATTACH_NAME'+postfix+'\',\'DISK_ID'+postfix+'\');" class="selfile">'+td_lang.inc.msg_6+'</a><input type="hidden" value="" name="ATTACH_NAME'+postfix+'"><input type="hidden" value="" name="ATTACH_DIR'+postfix+'"><input type="hidden" value="" name="DISK_ID'+postfix+'">');}}
function ShowAddImage(postfix)
{if(isUndefined(postfix))postfix="";document.write('<a id="add_image" class="addimage" href="javascript:;">'+td_lang.inc.msg_7+'<input class="addfile" type="file" name="ATTACHMENT'+postfix+'_1000" id="ATTACHMENT'+postfix+'_1000" size="1" hideFocus="true" onchange="AddFile(\'image\');" /></a>');}
function ShowAddImageMulti(postfix)
{if(isUndefined(postfix))postfix="";document.write('<a id="add_image_multi" class="addimage add_image_multi" href="javascript:;">'+td_lang.inc.multi_img_upload+'</a>');}
function AddImage2Editor(name,src)
{if(typeof(insertEditorImage)=='function')
insertEditorImage(name,src);}
function ShowImageGallery(o)
{var urlArr=[],cid=0,tmpid=0,url;var mig=o.getAttribute("data-group");var pNode=o.parentNode;if(pNode.className=="attach_div")
pNode=pNode.parentNode;pNode=del_space(pNode);var cNodes=pNode.childNodes;var cNodeLen=cNodes.length;for(var i=0;i<cNodeLen;i++)
{if(cNodes[i].tagName&&cNodes[i].tagName.toLowerCase()=="div"&&cNodes[i].className=="attach_div")
{for(var j=0;j<cNodes[i].childNodes.length;j++)
{if(cNodes[i].childNodes[j].tagName&&cNodes[i].childNodes[j].tagName.toLowerCase()=="a"&&cNodes[i].childNodes[j].getAttribute("data-group")==mig)
{if(o.getAttribute("data-url")==cNodes[i].childNodes[j].getAttribute("data-url"))
cid=tmpid;urlArr.push(cNodes[i].childNodes[j].getAttribute("data-url"));tmpid++;}}}
if(cNodes[i].tagName&&cNodes[i].tagName.toLowerCase()=="a"&&cNodes[i].getAttribute("data-group")==mig)
{if(o.getAttribute("data-url")==cNodes[i].getAttribute("data-url"))
cid=tmpid;urlArr.push(cNodes[i].getAttribute("data-url"));tmpid++;}}
if(urlArr.length>1)
{url='/module/mediaplayer/index.php?VIEW_MODE=gallery&CURRID='+cid+'&MEDIA_URL='+urlArr.join("@~@");}
else
{url='/module/mediaplayer/index.php?MEDIA_NAME=1.jpg&MEDIA_URL='+urlArr[0];}
window.open(url,'media_'+mig,'menubar=0,toolbar=0,status=1,scrollbars=1,resizable=1,width=800,height=600');}
function del_space(elem)
{var elem_child=elem.childNodes;for(var i=0;i<elem_child.length;i++)
{if(elem_child[i].nodeName=="#text")
{elem.removeChild(elem_child[i]);}}
return elem;}
