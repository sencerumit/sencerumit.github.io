import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const MatrixBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let chars = '01';
      let streams = [];
      let fontSize = 16;

      class Stream {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.chars = [];
          this.speed = random(2, 10);
          this.length = random(5, 30);
          this.opacity = 255;
        }

        generateChars() {
          for (let i = 0; i < this.length; i++) {
            this.chars[i] = chars.charAt(Math.floor(random(0, chars.length)));
          }
        }

        render() {
          p.fill(0, 255, 0, this.opacity);
          for (let i = 0; i < this.length; i++) {
            let char = this.chars[i];
            p.text(char, this.x, this.y + i * fontSize);
          }
          this.y += this.speed;
          if (this.y > p.height) {
            this.y = -this.length * fontSize;
            this.generateChars();
          }
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.textSize(fontSize);
        p.textFont('monospace');
        for (let i = 0; i < p.width / fontSize; i++) {
          streams.push(new Stream(i * fontSize, random(-1000, 0)));
          streams[i].generateChars();
        }
      };

      p.draw = () => {
        p.background(0, 25);
        streams.forEach(stream => stream.render());
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      const random = (min, max) => p.random(min, max);
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default MatrixBackground; 