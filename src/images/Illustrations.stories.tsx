import React from 'react';
import { styled } from '@storybook/theming';

// Colored Icons

// @ts-ignore
import Accessibility from './colored-icons/accessibility.svg';
// @ts-ignore
import Assign from './colored-icons/assign.svg';
// @ts-ignore
import Bell from './colored-icons/bell.svg';
// @ts-ignore
import Boxmodel from './colored-icons/boxmodel.svg';
// @ts-ignore
import Branch from './colored-icons/branch.svg';
// @ts-ignore
import Browsers from './colored-icons/browsers.svg';
// @ts-ignore
import Bug from './colored-icons/bug.svg';
// @ts-ignore
import Catalog from './colored-icons/catalog.svg';
// @ts-ignore
import Check from './colored-icons/check.svg';
// @ts-ignore
import CodeBrackets from './colored-icons/code-brackets.svg';
// @ts-ignore
import Code from './colored-icons/code.svg';
// @ts-ignore
import Colors from './colored-icons/colors.svg';
// @ts-ignore
import Comments from './colored-icons/comments.svg';
// @ts-ignore
import Components from './colored-icons/components.svg';
// @ts-ignore
import Delete from './colored-icons/delete.svg';
// @ts-ignore
import Detect from './colored-icons/detect.svg';
// @ts-ignore
import Direction from './colored-icons/direction.svg';
// @ts-ignore
import Email from './colored-icons/email.svg';
// @ts-ignore
import Error from './colored-icons/error.svg';
// @ts-ignore
import Eye from './colored-icons/eye.svg';
// @ts-ignore
import Flow from './colored-icons/flow.svg';
// @ts-ignore
import Group from './colored-icons/group.svg';
// @ts-ignore
import Ignore from './colored-icons/ignore.svg';
// @ts-ignore
import Interact from './colored-icons/interact.svg';
// @ts-ignore
import Interface from './colored-icons/interface.svg';
// @ts-ignore
import Key from './colored-icons/key.svg';
// @ts-ignore
import Knob from './colored-icons/knob.svg';
// @ts-ignore
import Lightning from './colored-icons/lightning.svg';
// @ts-ignore
import Link from './colored-icons/link.svg';
// @ts-ignore
import Overlap from './colored-icons/overlap.svg';
// @ts-ignore
import Pixel from './colored-icons/pixel.svg';
// @ts-ignore
import Plugin from './colored-icons/plugin.svg';
// @ts-ignore
import Plus from './colored-icons/plus.svg';
// @ts-ignore
import Projects from './colored-icons/projects.svg';
// @ts-ignore
import Repo from './colored-icons/repo.svg';
// @ts-ignore
import Review from './colored-icons/review.svg';
// @ts-ignore
import Rewind from './colored-icons/rewind.svg';
// @ts-ignore
import RunTest from './colored-icons/runtest.svg';
// @ts-ignore
import Scale from './colored-icons/scale.svg';
// @ts-ignore
import Search from './colored-icons/search.svg';
// @ts-ignore
import Shield from './colored-icons/shield.svg';
// @ts-ignore
import Stack from './colored-icons/stack.svg';
// @ts-ignore
import Stoplight from './colored-icons/stoplight.svg';
// @ts-ignore
import TestFlake from './colored-icons/testflake.svg';
// @ts-ignore
import TestPyramid from './colored-icons/testpyramid.svg';
// @ts-ignore
import Text from './colored-icons/text.svg';
// @ts-ignore
import Undo from './colored-icons/undo.svg';
// @ts-ignore
import Unignore from './colored-icons/unignore.svg';
// @ts-ignore
import Update from './colored-icons/update.svg';

export default {
  title: 'Images',
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 0 0 20%;
  margin-right: 5%;
  margin-bottom: 20px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

// prettier-ignore
export const ColoredIcons = () => (
  <Grid>
    <Item><img src={Accessibility} alt="Accessibility" /> Accessibility</Item>
    <Item><img src={Assign} alt="Assign" /> Assign</Item>
    <Item><img src={Bell} alt="Bell" /> Bell</Item>
    <Item><img src={Boxmodel} alt="Boxmodel" /> Boxmodel</Item>
    <Item><img src={Branch} alt="Branch" /> Branch</Item>
    <Item><img src={Browsers} alt="Browsers" /> Browsers</Item>
    <Item><img src={Bug} alt="Bug" /> Bug</Item>
    <Item><img src={Catalog} alt="Catalog" /> Catalog</Item>
    <Item><img src={Check} alt="Check" /> Check</Item>
    <Item><img src={Code} alt="Code" /> Code</Item>
    <Item><img src={CodeBrackets} alt="Code Brackets" /> Code Brackets</Item>
    <Item><img src={Colors} alt="Colors" /> Colors</Item>
    <Item><img src={Comments} alt="Comments" /> Comments</Item>
    <Item><img src={Components} alt="Components" /> Components</Item>
    <Item><img src={Delete} alt="Delete" /> Delete</Item>
    <Item><img src={Detect} alt="Detect" /> Detect</Item>
    <Item><img src={Direction} alt="Direction" /> Direction</Item>
    <Item><img src={Error} alt="Error" /> Error</Item>
    <Item><img src={Eye} alt="Eye" /> Eye</Item>
    <Item><img src={Email} alt="Email" /> Email</Item>
    <Item><img src={Flow} alt="Flow" /> Flow</Item>
    <Item><img src={Group} alt="Group" /> Group</Item>
    <Item><img src={Ignore} alt="Ignore" /> Ignore</Item>
    <Item><img src={Interact} alt="Interact" /> Interact</Item>
    <Item><img src={Interface} alt="Interface" /> Interface</Item>
    <Item><img src={Key} alt="Key" /> Key</Item>
    <Item><img src={Knob} alt="Knob" /> Knob</Item>
    <Item><img src={Lightning} alt="Lightning" /> Lightning</Item>
    <Item><img src={Link} alt="Link" /> Link</Item>
    <Item><img src={Overlap} alt="Overlap" /> Overlap</Item>
    <Item><img src={Pixel} alt="Pixel" /> Pixel</Item>
    <Item><img src={Plugin} alt="Plugin" /> Plugin</Item>
    <Item><img src={Plus} alt="Plus" /> Plus</Item>
    <Item><img src={Projects} alt="Projects" /> Projects</Item>
    <Item><img src={Repo} alt="Repo" /> Repo</Item>
    <Item><img src={Review} alt="Review" /> Review</Item>
    <Item><img src={Rewind} alt="Rewind" /> Rewind</Item>
    <Item><img src={RunTest} alt="Run Test" /> Run Test</Item>
    <Item><img src={Scale} alt="Scale" /> Scale</Item>
    <Item><img src={Search} alt="Search" /> Search</Item>
    <Item><img src={Shield} alt="Shield" /> Shield</Item>
    <Item><img src={Stack} alt="Stack" /> Stack</Item>
    <Item><img src={Stoplight} alt="Stoplight" /> Stoplight</Item>
    <Item><img src={TestFlake} alt="Test Flake" /> Test Flake</Item>
    <Item><img src={TestPyramid} alt="Test Pyramid" /> Test Pyramid</Item>
    <Item><img src={Text} alt="Text" /> Text</Item>
    <Item><img src={Undo} alt="Undo" /> Undo</Item>
    <Item><img src={Unignore} alt="Unignore" /> Unignore</Item>
    <Item><img src={Update} alt="Update" /> Update</Item>
  </Grid>
);

ColoredIcons.story = {
  name: 'Colored Icons',
};
