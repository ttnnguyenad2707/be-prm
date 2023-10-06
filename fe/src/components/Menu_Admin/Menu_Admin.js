import React, { useState, useEffect} from 'react';
import { useNavigate ,  useLocation  } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Menu.scss'
const Menu_Admin = () => {
    const location = useLocation();
    const [subActive, setsubActive] = useState(location.state);
    const navigate = useNavigate();
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('Manage content', 'sub1', <MailOutlined />),
        getItem('Manage user', 'sub2', <AppstoreOutlined />),
        {
            type: 'divider',
        },
        getItem('Setting System', 'sub4', <SettingOutlined />, [
            getItem('User', 'sub4-1'),
            getItem('User Post', 'sub4-2')
        ]),
        //   getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
    ];
    const onClick = (e) => {
        setsubActive(e.key);
    };
    useEffect(() => {
        if (subActive) {
          // Thực hiện điều hướng sau khi cập nhật trạng thái
          navigateToDashboard();
        }
      }, [subActive]);
    
      const navigateToDashboard = () => {
        // Thực hiện điều hướng đến "/dashboard" với trạng thái subActive
        navigate('/admin/hi', { state: subActive, replace: true });
      };
    return (
        <div className='menu_admin'>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                    height: '100vh',
                    backgroundColor: '#f7efe5',
                    fontSize: 'medium',
                    fontWeight: 'bold',
                    color: '#E66D4F'
                }}
                mode="inline"
                defaultOpenKeys={subActive}
                items={items}
            />
        </div>
    );
};
export default Menu_Admin;