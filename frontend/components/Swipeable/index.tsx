import { FC, useEffect, useRef } from 'react';
import { SwipeableType } from '../../utils/@types';
import styles from '../../styles/modules/Swipeable.module.scss';
import { SCROLL_FAST } from '../../utils/@contants';

interface SwipeableProps {
  items: SwipeableType[];
}

const Swipeable: FC<SwipeableProps> = ({ items }) => {
  const swipeableRef = useRef<HTMLInputElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    swipeableRef.current?.addEventListener('mousedown', handleMouseDown);
    swipeableRef.current?.addEventListener('mouseup', handleMouseUp);
    swipeableRef.current?.addEventListener('mouseleave', handleMouseLeave);
    swipeableRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => {
      swipeableRef.current?.removeEventListener('mousedown', handleMouseDown);
      swipeableRef.current?.removeEventListener('mouseup', handleMouseUp);
      swipeableRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      swipeableRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - swipeableRef.current?.offsetLeft!;
    scrollLeft.current = swipeableRef.current?.scrollLeft!;
  };
  const handleMouseUp = () => {
    isDown.current = false;
  };
  const handleMouseLeave = () => {
    isDown.current = false;
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - swipeableRef.current?.offsetLeft!;
    const scroll = (x - startX.current) * SCROLL_FAST;
    swipeableRef.current!.scrollLeft = scrollLeft.current - scroll;
  };

  return (
    <>
      <div className={styles.items} ref={swipeableRef}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Swipeable;
