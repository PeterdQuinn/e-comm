// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dqttFxhDmHsNNwzjnwEK9t
// Component: 9yBHXD_zc5KHK
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: dqttFxhDmHsNNwzjnwEK9t/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: 9yBHXD_zc5KHK/css

import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: SZPwkOfcOCCoT/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: rIJX913hBtGRt/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: ob5Mfd6jI3eWX/icon

export type PlasmicRating__VariantMembers = {
  rating:
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf";
};
export type PlasmicRating__VariantsArgs = {
  rating?: SingleChoiceArg<
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf"
  >;
};
type VariantPropType = keyof PlasmicRating__VariantsArgs;
export const PlasmicRating__VariantProps = new Array<VariantPropType>("rating");

export type PlasmicRating__ArgsType = {};
type ArgPropType = keyof PlasmicRating__ArgsType;
export const PlasmicRating__ArgProps = new Array<ArgPropType>();

export type PlasmicRating__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultRatingProps {
  rating?: SingleChoiceArg<
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf"
  >;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicRating__RenderFunc(props: {
  variants: PlasmicRating__VariantsArgs;
  args: PlasmicRating__ArgsType;
  overrides: PlasmicRating__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "rating",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.rating
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__ox4CW, {
          [sty.svgrating_five__ox4CWhcPvf]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__ox4CWTcTrk]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__ox4CWgn2AY]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_half__ox4CWBvomC]: hasVariant(
            $state,
            "rating",
            "half"
          ),
          [sty.svgrating_oneHalf__ox4CWsvud0]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_one__ox4CWehg0D]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf__ox4CWsBYrS]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__ox4CWnKb0]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__ox4CWeJkDm]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__ox4CWbvJhK]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__xzEvl, {
          [sty.svgrating_five__xzEvlhcPvf]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__xzEvlTcTrk]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__xzEvLgn2AY]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_oneHalf__xzEvLsvud0]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_threeHalf__xzEvLsBYrS]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__xzEvLnKb0]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__xzEvleJkDm]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__xzEvlbvJhK]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__zjt9K, {
          [sty.svgrating_five__zjt9KHcPvf]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__zjt9KTcTrk]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__zjt9Kgn2AY]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__zjt9KsBYrS]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__zjt9KnKb0]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__zjt9KEJkDm]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__t9Nsq, {
          [sty.svgrating_five__t9NsqHcPvf]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__t9NsqTcTrk]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__t9Nsqgn2AY]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__t9NsqsBYrS]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__ptqm6, {
          [sty.svgrating_five__ptqm6HcPvf]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__ptqm6TcTrk]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRating__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRating__VariantsArgs;
    args?: PlasmicRating__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRating__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRating__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
