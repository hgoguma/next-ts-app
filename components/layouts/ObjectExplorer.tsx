import { useState, useCallback, useEffect } from 'react';
import styles from '@/styles/layouts/ObjectExplorer.module.scss'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import menuConfig from '@/config/menu.json';
import { Menus } from 'types/components/layouts';
import { useRouter } from 'next/router'

const ObjectExplorer = () => {
  const router = useRouter()
  const [menus, setMenus] = useState<Menus[]>([]);
  
  const [open, setOpen] = useState<boolean>(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<string>('')

  const handleClick = useCallback((index: string) => {
    setActiveMenuIndex(index)
    setOpen(!open)
  }, [open]);

  const handleMenu = useCallback((url: string) => {
    if (!url) return
    router.push(url)
  }, []);

  useEffect(() => {
    setMenus(menuConfig.menu)
  }, []);

  return (
    <div className={styles.container}>
      <List component="nav" sx={{ width: '100%'}}>
      { menus.map(item => {
          return (
            <div key={item.index}>
              <ListItemButton  onClick={() => handleClick(item.index)}>
                <ListItemText primary={item.title} />
                { open && item.index === activeMenuIndex ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open && item.index === activeMenuIndex} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  { item.children.map(child => {
                      return (
                        <ListItemButton key={child.index} sx={{ pl: 4 }} onClick={() => handleMenu(child.url)}>
                          <ListItemText primary={child.title} />
                        </ListItemButton>
                      )
                  })}
                </List>
              </Collapse>
            </div>
          )
       })}
      </List>
    </div>
  );
};

export default ObjectExplorer;