import { FC, useEffect, useState, useRef } from 'react';
import styles from '../../styles/Swipeable.module.css';
import Filter from '../Filter';

interface FilterProps {
  // label: string;
}

const Swipeable: FC<FilterProps> = () => {
  const [isActive, setIsActive] = useState(false);
  const swipeableRef = useRef<HTMLInputElement | null>(null);

  // const [scrollLeft, setScrollLeft] = useState<any>();
  // const [isDown, setIsDown] = useState(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // const [startX, setStartX] = useState<any>();

  /*useEffect(() => {
    console.log('scrollLeft: ', scrollLeft);
    console.log('isDown: ', isDown);
    console.log('startX: ', startX);
  }, [isDown, startX, scrollLeft]);*/

  /*useEffect(() => {
    console.log('swipeableRef.current: ', swipeableRef.current);
  }, [swipeableRef.current]);*/

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
    console.log('handleMouseDown');
    // setIsDown(true);
    isDown.current = true;

    // setStartX(e.pageX - swipeableRef.current?.offsetLeft!);
    startX.current = e.pageX - swipeableRef.current?.offsetLeft!;
    // setScrollLeft(swipeableRef.current?.scrollLeft);
    scrollLeft.current = swipeableRef.current?.scrollLeft!;
  };
  const handleMouseUp = () => {
    console.log('handleMouseUp');
    // setIsDown(false);
    isDown.current = false;
  };
  const handleMouseLeave = () => {
    console.log('handleMouseLeave');
    // setIsDown(false);
    isDown.current = false;
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown.current) return;
    console.log('handleMouseMove');
    e.preventDefault();
    const x = e.pageX - swipeableRef.current?.offsetLeft!;
    const walk = (x - startX.current) * 1; //scroll-fast
    swipeableRef.current!.scrollLeft = scrollLeft.current - walk;
    console.log(walk);
  };

  return (
    <>
      <div className={styles.items} ref={swipeableRef}>
        <div className={styles.item}>
          <Filter label="Best Qunoscore" />
        </div>
        <div className={styles.item}>
          <Filter label="Best Reviews" />
        </div>
        <div className={styles.item}>
          <Filter label="Lowest Qunoscore" />
        </div>
        <div className={styles.item}>
          <Filter label="Lowest Qunoscore" />
        </div>
      </div>
    </>
  );
};

export default Swipeable;
