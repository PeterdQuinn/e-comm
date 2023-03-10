// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dqttFxhDmHsNNwzjnwEK9t
// Component: Y88CZPl9xMXEk
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
import Value from "../../Value"; // plasmic-import: 4npco0bsljb91/component
import Button from "../../Button"; // plasmic-import: _bcmwX0jFS3Tb/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: dqttFxhDmHsNNwzjnwEK9t/projectcss
import sty from "./PlasmicEmojiValueProps.module.css"; // plasmic-import: Y88CZPl9xMXEk/css

import PlaneIcon from "./icons/PlasmicIcon__Plane"; // plasmic-import: J79hQoCdT6BIU/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: 8C1PB62iWe1Ro/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: w6HFmaEyP7cBB/icon
import DocumentIcon from "./icons/PlasmicIcon__Document"; // plasmic-import: BnFQdqqK-sKLg/icon
import LockIcon from "./icons/PlasmicIcon__Lock"; // plasmic-import: PlqGbFUP1gfcG/icon

export type PlasmicEmojiValueProps__VariantMembers = {};
export type PlasmicEmojiValueProps__VariantsArgs = {};
type VariantPropType = keyof PlasmicEmojiValueProps__VariantsArgs;
export const PlasmicEmojiValueProps__VariantProps =
  new Array<VariantPropType>();

export type PlasmicEmojiValueProps__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicEmojiValueProps__ArgsType;
export const PlasmicEmojiValueProps__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicEmojiValueProps__OverridesType = {
  root?: p.Flex<"section">;
};

export interface DefaultEmojiValuePropsProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicEmojiValueProps__RenderFunc(props: {
  variants: PlasmicEmojiValueProps__VariantsArgs;
  args: PlasmicEmojiValueProps__ArgsType;
  overrides: PlasmicEmojiValueProps__OverridesType;

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

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nq5S)}
          >
            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button__soBmj)}
                  colors={"black" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__wFmEj)}
                      role={"img"}
                    />
                  }
                  rounded={true}
                  size={"large" as const}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value___4H1Rs)}
              icon={
                <PlaneIcon
                  className={classNames(projectcss.all, sty.svg__tNZnD)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rlKfc
                )}
              >
                {"Worldwide shipping"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i4Gkj
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </Value>

            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button__wCmn)}
                  colors={"black" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__p8NSm)}
                      role={"img"}
                    />
                  }
                  rounded={true}
                  size={"large" as const}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value__i57Sz)}
              icon={
                <DocumentIcon
                  className={classNames(projectcss.all, sty.svg___2Hrvx)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__it2Pf
                )}
              >
                {"30-day guarantee"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tm1Pb
                )}
              >
                {"Free return policy."}
              </div>
            </Value>

            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button__bwS9V)}
                  colors={"black" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__fl4YF)}
                      role={"img"}
                    />
                  }
                  rounded={true}
                  size={"large" as const}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value___64Hef)}
              icon={
                <LockIcon
                  className={classNames(projectcss.all, sty.svg__cYxv6)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ckcAv
                )}
              >
                {"Secured payments"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d2Gra
                )}
              >
                {"We accept major credit cards."}
              </div>
            </Value>
          </p.Stack>
        ),

        value: args.children
      })}
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEmojiValueProps__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEmojiValueProps__VariantsArgs;
    args?: PlasmicEmojiValueProps__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEmojiValueProps__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEmojiValueProps__ArgsType,
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
          internalArgPropNames: PlasmicEmojiValueProps__ArgProps,
          internalVariantPropNames: PlasmicEmojiValueProps__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEmojiValueProps__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmojiValueProps";
  } else {
    func.displayName = `PlasmicEmojiValueProps.${nodeName}`;
  }
  return func;
}

export const PlasmicEmojiValueProps = Object.assign(
  // Top-level PlasmicEmojiValueProps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicEmojiValueProps
    internalVariantProps: PlasmicEmojiValueProps__VariantProps,
    internalArgProps: PlasmicEmojiValueProps__ArgProps
  }
);

export default PlasmicEmojiValueProps;
/* prettier-ignore-end */
