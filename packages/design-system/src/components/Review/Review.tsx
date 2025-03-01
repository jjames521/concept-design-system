import React from 'react';
import ReviewLink from './ReviewLink';
import classNames from 'classnames';

export type ReviewHeadingLevel = '1' | '2' | '3' | '4' | '5';

export interface ReviewProps {
  /**
   * `Review` component's body content.
   */
  children: React.ReactNode;
  className?: string;
  /**
   * Optional label to give screenreaders longer, more descriptive text to
   * explain the context of an edit link.
   */
  editAriaLabel?: string;
  /**
   * An optional node in place of the edit link. If this defined, no edit link will be shown.
   */
  editContent?: React.ReactNode;
  /**
   * Href for the edit link. If this is undefined, no edit link will be shown.
   */
  editHref?: string;
  editText?: React.ReactNode;
  heading?: React.ReactNode;
  /**
   * Heading type to override default `<h3>`.
   */
  headingLevel?: ReviewHeadingLevel;
  /**
   * An optional function that is executed on edit link click. The event and
   * props.editHref value are passed to this function.
   */
  onEditClick?: (...args: any[]) => any;
}

const getHeading = (heading, headingLevel) => {
  const Heading = (`h${headingLevel}` || `h3`) as keyof JSX.IntrinsicElements;
  if (heading) {
    return <Heading className="ds-c-review__heading">{heading}</Heading>;
  }
};

export const Review = (props: ReviewProps) => {
  const classes = classNames('ds-c-review', props.className);

  return (
    <div className={classes}>
      <div className="ds-c-review__content">
        {getHeading(props.heading, props.headingLevel)}
        <div className="ds-c-review__body">{props.children}</div>
      </div>
      {props.editContent}
      {!props.editContent && props.editHref && (
        <ReviewLink
          onClick={props.onEditClick}
          href={props.editHref}
          ariaLabel={props.editAriaLabel}
        >
          {props.editText}
        </ReviewLink>
      )}
    </div>
  );
};

Review.defaultProps = {
  editText: 'Edit',
  headingLevel: '3',
};

export default Review;
