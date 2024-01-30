/**
 * A componnet that shows a bar that indicates a
 * value based on a max value.
 */
export default function ValueIndicatorBar({
   max,
   value,
   fgColor,
   bgColor,
 }: {
   max: number;
   value: number;
   /** a tailwind class for the foreground color */
   fgColor: string;
   /** a tailwind class for the background color */
   bgColor: string;
 }) {
   const percentage = Math.round((value / max) * 100);
   return (
     <div className={"h-4 rounded w-full " + bgColor}>
       <div
         className={"h-full rounded " + fgColor}
         style={{ width: percentage + "%" }}
       ></div>
     </div>
   );
 }
 